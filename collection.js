(() => {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    const search = document.getElementById('search');
    const sort = document.getElementById('sort');
    const categories = document.getElementById('category-filters');
    // Render from the two existing catalog sources so edits to product data are reflected immediately.
    const escapeHTML = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
    const cards = new Map(products.map(product => {
        const detail = PRODUCTS[product.link.replace('product-', '').replace('.html', '')];
        const hover = detail?.gallery?.White?.[1];
        const card = document.createElement('a');
        card.className = 'product-card';
        card.href = product.link;
        card.dataset.cardId = product.id;
        card.innerHTML = `<div class="card-image"><img src="${escapeHTML(product.img)}" alt="${escapeHTML(product.name)}" loading="lazy" decoding="async" width="600" height="800">${hover ? `<img class="card-hover" src="${escapeHTML(hover)}" alt="" loading="lazy" decoding="async" width="600" height="800">` : ''}<span class="sold-badge">SOLD OUT</span><span class="card-arrow" aria-hidden="true">↗</span></div><div class="card-meta"><span>${escapeHTML(product.brand)}</span><span>${escapeHTML(detail?.category || '')}</span></div><h3 class="card-name">${escapeHTML(product.name)}</h3><div class="card-price">${escapeHTML(product.price).replace(' (税込)', ' <span>(税込)</span>')}</div>`;
        return [product.id, card];
    }));
    const labels = [['all', 'All pieces'], ['tops', 'Tops & Outerwear'], ['shirts', 'Shirts & T-Shirts'], ['pants', 'Pants'], ['skirts', 'Skirts'], ['shoes', 'Shoes'], ['bags', 'Bags'], ['wallets', 'Wallets'], ['handkerchiefs', 'Handkerchiefs']];
    const validFilters = new Set(products.flatMap(product => product.filterClass.split(' ')));
    const state = { brand: 'all', category: 'all', query: '', sort: 'featured' };
    const brandCopy = {
        all: ['Collection.', '洗練された静寂と、自由なストリートの鼓動。EOLE / OKURIH のコレクション。'],
        eole: ['EOLE.', '洗練されたシルエットと上質な素材感が引き立つ、現代的なエレガンスをまとうEOLEのコレクション。'],
        okurih: ['OKURIH.', 'ストリートの軽さとモードの空気を重ねた、自由でエッジのあるOKURIHのスタイル。']
    };
    function categoryOf(product) {
        const filter = product.filterClass.split(' ').find(value => value.startsWith('eole-') || value === 'okurih-tops' || value === 'okurih-acc-bags');
        return filter === 'okurih-acc-bags' ? 'bags' : filter?.split('-').at(-1);
    }
    function readURL() {
        const params = new URLSearchParams(location.search);
        const filter = params.get('filter');
        state.brand = ['eole', 'okurih'].includes(params.get('brand')) ? params.get('brand') : 'all';
        state.category = 'all';
        if (validFilters.has(filter)) {
            state.brand = filter.includes('okurih') ? 'okurih' : 'eole';
            if (!filter.startsWith('brand-')) state.category = filter === 'okurih-accessories' ? 'bags' : filter.split('-').at(-1);
        } else if (labels.some(([key]) => key === params.get('category'))) state.category = params.get('category');
        state.query = params.get('q') || '';
        state.sort = ['featured', 'price-asc', 'price-desc', 'name'].includes(params.get('sort')) ? params.get('sort') : 'featured';
        search.value = state.query;
        sort.value = state.sort;
    }
    function makeURL() {
        const params = new URLSearchParams();
        if (state.brand !== 'all') {
            if (state.category === 'all') params.set('brand', state.brand);
            else params.set('filter', `${state.brand}-${state.brand === 'okurih' && state.category === 'bags' ? 'acc-bags' : state.category}`);
        } else if (state.category !== 'all') params.set('category', state.category);
        if (state.query) params.set('q', state.query);
        if (state.sort !== 'featured') params.set('sort', state.sort);
        return `gallery.html${params.size ? '?' + params : ''}`;
    }
    function render() {
        const query = state.query.trim().normalize('NFKC').toLocaleLowerCase();
        let results = products.filter(product => (state.brand === 'all' || product.brand.toLowerCase() === state.brand)
            && (state.category === 'all' || categoryOf(product) === state.category)
            && `${product.brand} ${product.name}`.normalize('NFKC').toLocaleLowerCase().includes(query));
        const price = product => Number(product.price.replace(/[^0-9]/g, ''));
        if (state.sort === 'price-asc') results.sort((a,b) => price(a) - price(b));
        if (state.sort === 'price-desc') results.sort((a,b) => price(b) - price(a));
        if (state.sort === 'name') results.sort((a,b) => a.name.localeCompare(b.name, 'en'));
        grid.replaceChildren(...results.map(product => cards.get(product.id)));
        document.getElementById('empty-message').hidden = results.length > 0;
        document.getElementById('result-summary').textContent = `${String(results.length).padStart(2,'0')} pieces / ${labels.find(([key]) => key === state.category)?.[1] || 'All pieces'}`;
        document.getElementById('collection-end').hidden = !results.length;
        document.getElementById('collection-end').textContent = `YOU HAVE VIEWED ALL ${results.length} PIECES`;
        document.getElementById('collection-title').textContent = brandCopy[state.brand][0];
        document.getElementById('collection-description').textContent = brandCopy[state.brand][1];
        document.querySelectorAll('[data-brand-filter]').forEach(link => {
            const selected = link.dataset.brandFilter === state.brand;
            link.classList.toggle('active', selected);
            if (selected) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
        });
        const available = new Set(products.filter(product => state.brand === 'all' || product.brand.toLowerCase() === state.brand).map(categoryOf));
        categories.replaceChildren(...labels.filter(([key]) => key === 'all' || available.has(key)).map(([key,label]) => {
            const link = document.createElement('a');
            link.textContent = state.brand === 'okurih' && key === 'tops' ? 'Tops & Hoodies' : label;
            link.dataset.category = key;
            const prior = state.category;
            state.category = key; link.href = makeURL(); state.category = prior;
            link.className = prior === key ? 'active' : '';
            if (prior === key) link.setAttribute('aria-current', 'true');
            return link;
        }));
    }
    function update(replace = false) {
        try { history[replace ? 'replaceState' : 'pushState'](null, '', makeURL()); } catch { /* file:// previews can restrict history changes. */ }
        render();
    }
    document.querySelectorAll('[data-brand-filter]').forEach(link => link.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault(); state.brand = link.dataset.brandFilter; state.category = 'all'; update();
    }));
    categories.addEventListener('click', event => {
        const link = event.target.closest('[data-category]');
        if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault(); state.category = link.dataset.category; update();
        categories.querySelector(`[data-category="${state.category}"]`)?.focus({preventScroll:true});
    });
    search.addEventListener('input', () => { state.query = search.value; update(true); });
    sort.addEventListener('change', () => { state.sort = sort.value; update(); });
    document.getElementById('reset-filters').addEventListener('click', () => {
        Object.assign(state, { brand: 'all', category: 'all', query: '', sort: 'featured' });
        search.value = ''; sort.value = 'featured'; update(); search.focus({preventScroll:true});
    });
    window.addEventListener('popstate', () => { readURL(); render(); });
    function focusSearch() { if (location.hash === '#search') search.focus({preventScroll:true}); }
    window.addEventListener('hashchange', focusSearch);
    readURL(); render(); focusSearch();
})();
