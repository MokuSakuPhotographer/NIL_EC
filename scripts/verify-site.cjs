// Local regression check. Requires Playwright supplied by the host; no site build is needed.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const base = process.env.SITE_URL || 'http://127.0.0.1:8000';
const runtime = process.env.PLAYWRIGHT_MODULE || 'playwright';
const { chromium } = require(runtime);
const source = fs.readFileSync(path.join(root, 'product-detail.js'), 'utf8');
const data = vm.runInNewContext(source.split('function yen')[0] + '\nPRODUCTS;');
const galleryHTML = fs.readFileSync(path.join(root, 'gallery.html'), 'utf8');
const products = vm.runInNewContext(galleryHTML.match(/const products = (\[[\s\S]*?\n\s*\]);/)[1]);
const pages = fs.readdirSync(root).filter(file => file.endsWith('.html'));
let assertions = 0;
function check(value, message) { assert.ok(value, message); assertions++; }
function exactFile(relative) {
    let current = root;
    for (const part of relative.split('/')) {
        check(fs.readdirSync(current).includes(part), `Missing or case-mismatched path: ${relative}`);
        current = path.join(current, part);
    }
}
for (const file of pages) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    for (const [,raw] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
        const relative = raw.replaceAll('&amp;', '&').split(/[?#]/)[0];
        if (!relative || /^(?:data:|https?:)/.test(relative)) continue;
        exactFile(decodeURIComponent(relative));
    }
    check(!/https?:\/\//.test(html), `External dependency: ${file}`);
}
check(products.length === Object.keys(data).length, 'Catalog counts differ');
check(new Set(products.map(p=>p.id)).size === products.length, 'Duplicate catalog IDs');
const images = new Set();
for (const p of products) {
    const item = data[p.link.replace('product-', '').replace('.html', '')];
    check(item?.name === p.name && item.brand === p.brand, `Catalog mismatch: ${p.link}`);
    check(Number(p.price.replace(/[^0-9]/g,'')) === item.priceEx, `Price mismatch: ${p.name}`);
    check(p.soldOut === true, `Not sold out: ${p.name}`);
    [item.white, item.black, ...Object.values(item.gallery || {}).flat()].filter(Boolean).forEach(image => { exactFile(image); images.add(image); });
}
(async () => {
    const browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_PATH ? {executablePath:process.env.BROWSER_PATH} : {}) });
    const context = await browser.newContext({ viewport: {width:1440,height:1000}, reducedMotion:'reduce' });
    const page = await context.newPage();
    const errors = [];
    const external = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type()==='error') errors.push(message.text()); });
    page.on('request', request => { if (!request.url().startsWith(base) && !request.url().startsWith('data:')) external.push(request.url()); });
    try {
        for (const width of [1440,390]) {
            await page.setViewportSize({width,height:1000});
            for (const file of pages) {
                await page.goto(`${base}/${encodeURIComponent(file)}`);
                await page.waitForLoadState('networkidle');
                const layout = await page.evaluate(() => ({width:innerWidth,scroll:document.documentElement.scrollWidth,h1:document.querySelector('h1')?.textContent,header:!!document.querySelector('.site-header'),footer:!!document.querySelector('.site-footer')}));
                check(layout.scroll <= width + 1, `Horizontal overflow: ${file} at ${width}: ${layout.scroll}`);
                check(layout.h1?.trim() && layout.header && layout.footer, `Incomplete page: ${file}`);
                if (await page.locator('body[data-product]').count()) {
                    const key = await page.locator('body').getAttribute('data-product');
                    const item = data[key];
                    check(await page.locator('#title').textContent() === item.name, `Product name: ${file}`);
                    check(await page.locator('.btn-add').isDisabled(), `Purchase enabled: ${file}`);
                    check(await page.locator('.size-btn').count() === item.sizes.length, `Sizes: ${file}`);
                    check(await page.locator('#color-options').isVisible() === !Boolean(item.hideColorOptions), `Color visibility: ${file}`);
                    check(await page.locator('#product-image').evaluate(image=>image.complete && image.naturalWidth>0), `Image not rendered: ${file}`);
                    check(await page.locator('#price-ex').textContent() === `¥${item.priceEx.toLocaleString('ja-JP')} (税込)`, `Rendered price: ${file}`);
                }
            }
            console.log(`PASS: ${pages.length} routes at ${width}px`);
        }
        await page.setViewportSize({width:1440,height:1000});
        await page.goto(`${base}/gallery.html`);
        check(await page.locator('#product-grid > a').count() === 39, 'All products');
        for (const filter of new Set(products.flatMap(product=>product.filterClass.split(' ')))) {
            await page.goto(`${base}/gallery.html?filter=${filter}`);
            const expected = products.filter(product=>product.filterClass.split(' ').includes(filter)).length;
            check(await page.locator('#product-grid > a').count() === expected, `URL filter ${filter}`);
        }
        await page.goto(`${base}/gallery.html`);
        await page.locator('#search').fill('heart');
        check(await page.locator('#product-grid > a').count() === 1, 'Search');
        await page.reload();
        check(await page.locator('#search').inputValue() === 'heart', 'Search survives reload');
        await page.locator('#search').fill('no-matching-item');
        check(await page.locator('#empty-message').isVisible(), 'Empty results');
        await page.locator('#reset-filters').click();
        check(await page.locator('#product-grid > a').count() === 39, 'Reset');
        await page.locator('#sort').selectOption('price-asc');
        check(await page.locator('#product-grid > a').first().getAttribute('href') === 'product-hoodie-heart.html', 'Ascending price');
        await page.locator('#sort').selectOption('price-desc');
        check(await page.locator('#product-grid > a').first().getAttribute('href') === 'product-noir-cashmere-chester-coat.html', 'Descending price');
        await page.locator('[data-brand-filter="okurih"]').click();
        check(await page.locator('#product-grid > a').count() === 2, 'Brand selection');
        await page.locator('[data-category="bags"]').click();
        check(await page.locator('#product-grid > a').count() === 1, 'Category selection');
        await page.goBack();
        check(await page.locator('#product-grid > a').count() === 2, 'History restores brand');
        await page.goBack();
        check(await page.locator('#product-grid > a').count() === 39, 'History restores full collection');
        await page.goto(`${base}/product-hoodie-heart.html`);
        await page.locator('.color-btn[data-color="Black"]').click();
        await page.waitForFunction(()=>document.getElementById('product-image').getAttribute('src').includes('hoodie-heart-B.webp'));
        await page.locator('.gallery-next').click();
        await page.waitForFunction(()=>document.getElementById('image-count').textContent==='02 / 04');
        check(await page.locator('#product-image').getAttribute('src') === data['hoodie-heart'].gallery.Black[1], 'Black gallery');
        await page.locator('.gallery-dot').nth(2).click();
        await page.waitForFunction(()=>document.getElementById('image-count').textContent==='03 / 04');
        check(await page.locator('.gallery-dot').nth(2).evaluate(el=>el===document.activeElement), 'Image selection retains keyboard focus');
        await page.locator('.size-btn').filter({hasText:/^XL$/}).click();
        check(await page.locator('#selected-size').textContent() === 'XL', 'Size selection');
        await page.locator('.acc-header').filter({hasText:/^Size Guide$/}).click();
        check(await page.locator('.size-table').isVisible(), 'Size guide');
        await page.locator('.acc-header').filter({hasText:/^Details$/}).click();
        check(await page.locator('.acc-header').filter({hasText:/^Details$/}).getAttribute('aria-expanded') === 'true', 'Details accordion');
        await page.goto(`${base}/about.html`);
        await page.locator('[data-brand="okurih"]').click();
        check(await page.locator('#detail-okurih').isVisible() && !await page.locator('#detail-eole').isVisible(), 'About selector');
        await page.reload();
        check(await page.locator('#detail-okurih').isVisible(), 'About hash state');
        await page.setViewportSize({width:390,height:844});
        await page.goto(`${base}/index.html`);
        await page.locator('.menu-toggle').click();
        check(await page.locator('#main-nav').isVisible(), 'Mobile menu opens');
        await page.locator('.brand-menu > summary').click();
        check(await page.locator('.brand-menu-panel').isVisible(), 'Mobile brands open');
        await page.keyboard.press('Escape');
        check(!await page.locator('.brand-menu-panel').isVisible(), 'Escape closes brands');
        await page.keyboard.press('Escape');
        check(!await page.locator('#main-nav').isVisible(), 'Escape closes menu');
        for (const width of [320,768]) {
            await page.setViewportSize({width,height:1000});
            for (const file of ['index.html','gallery.html','about.html','cart.html','product-noir-cashmere-chester-coat.html']) {
                await page.goto(`${base}/${file}`);
                check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1), `Narrow overflow: ${file}/${width}`);
            }
        }
        const brokenImages = await page.evaluate(async paths => {
            const bad = [];
            for (const src of paths) {
                const image = new Image(); image.src = src;
                try { await image.decode(); } catch { bad.push(src); }
            }
            return bad;
        }, [...images]);
        check(brokenImages.length === 0, `Invalid image files: ${brokenImages}`);
        check(errors.length === 0, `Browser errors: ${errors.join('\n')}`);
        check(external.length === 0, `External requests: ${external.join('\n')}`);
        const output = process.env.QA_OUTPUT;
        if (output) {
            fs.mkdirSync(output,{recursive:true});
            for (const [label,width,height] of [['desktop',1440,1000],['mobile',390,844]]) {
                await page.setViewportSize({width,height});
                for (const [name,file] of [['home','index.html'],['collection','gallery.html'],['about','about.html'],['cart','cart.html'],['product','product-hoodie-heart.html']]) {
                    await page.goto(`${base}/${file}`);
                    await page.evaluate(async () => {
                        document.querySelectorAll('img').forEach(img=>img.loading='eager');
                        await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));
                    });
                    await page.screenshot({path:path.join(output,`${name}-${label}.png`),fullPage:true});
                    if(name==='home')await page.screenshot({path:path.join(output,`home-${label}-viewport.png`)});
                }
            }
        }
        console.log(`PASS: ${assertions} checks; ${pages.length} routes; ${products.length} products; ${images.size} product images; no browser errors or external requests.`);
    } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1;});
