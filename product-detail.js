const PRODUCTS = {
    'bag-geometry': {
        brand: 'OKURIH',
        name: 'Geometry Bag',
        category: 'Bag',
        priceEx: 8800,
        white: 'images/product/bag/bag-geometry.webp',
        black: '',
        sizes: ['One Size'],
        activeSize: 'One Size',
        material: 'High-density polyester canvas / synthetic leather trim',
        origin: 'Vietnam',
        materialNote: '日常使いしやすいキャンバス素材を選びつつ、密度とトリムのバランスにこだわることで、ラフすぎない清潔感のある印象に仕上げています。',
        link: 'product-bag-geometry.html',
        description: '軽やかなストリート感をまとったOKURIHのグラフィックバッグ。扱いやすいカジュアル素材を使いながら、スタイリングが引き締まる見え方を意識しています。',
        points: ['繰り返し使いやすい軽さと、ほどよい形の安定感があります。', 'グラフィックの配置が、主張しすぎずコーディネートのアクセントになります。', 'カジュアルな素材でも雑に見えないよう、持ち手やトリムのバランスを整えています。'],
        care: ['汚れた場合は柔らかい布でやさしく拭き取ってください。', '濡れた場合は形を整え、風通しの良い日陰で乾かしてください。', '直射日光と高温多湿を避けて保管してください。']
    },
    'hoodie-heart': {
        brand: 'OKURIH',
        name: 'Heart Hoodie',
        category: 'Hoodie',
        priceEx: 9800,
        white: 'images/product/hoodie/hoodie-Heart.webp',
        black: 'images/product/hoodie/hoodie-heart-B.webp',
        sizes: ['S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Heavy cotton fleece blend',
        origin: 'China',
        materialNote: '気軽に着られるフリースブレンドを使いながら、厚み、プリントの見え方、ストリートらしいシルエットには妥協しない設計にしています。',
        link: 'product-hoodie-heart.html',
        description: 'ハートモチーフを効かせたOKURIHのフーディー。ラフに着られるシルエットながら、グラフィックと生地の厚みで日常着以上の存在感を持たせています。',
        points: ['ほどよい厚みと落ち感のある、ストリート寄りのゆったりしたシルエットです。', '袖口と裾のリブで、ラフな中にもきれいな収まりを作っています。', '一枚で着たときに主役になるよう、プリント位置を調整しています。'],
        care: ['洗濯ネットを使用し、裏返して弱水流で洗ってください。', 'プリント部分への直接アイロンは避けてください。', '乾燥機は使用せず、形を整えて陰干ししてください。']
    },
    'tshirt-geometry': {
        brand: 'EOLE',
        name: 'Geometry T-Shirt',
        category: 'T-Shirt',
        priceEx: 36000,
        white: 'images/product/shirt/tshirt-geometry.webp',
        black: 'images/product/shirt/tshirt-geometry-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Mercerized Supima cotton jersey',
        origin: 'Japan',
        materialNote: '長繊維のスーピマコットンにシルケット加工を施し、なめらかな表面感、上品な光沢、落ち感のあるシルエットを引き出しています。',
        link: 'product-tshirt-geometry.html',
        description: 'シャープな幾何学モチーフを主役にしたEOLEのTシャツ。磨かれたようなコットンの表面感が、グラフィックに静かな高級感を与えます。'
    },
    'tshirt-geometry-marble': {
        brand: 'EOLE',
        name: 'Geometry Marble T-Shirt',
        category: 'T-Shirt',
        priceEx: 42000,
        white: 'images/product/shirt/tshirt-geometry-marble.webp',
        black: 'images/product/shirt/tshirt-geometry-marble-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Silk-cotton smooth jersey',
        origin: 'Italy',
        materialNote: 'シルク混のコットン素材を選ぶことで、マーブルグラフィックにほのかな艶と柔らかな高級感を加えています。',
        link: 'product-tshirt-geometry-marble.html',
        description: '幾何学とマーブルの質感を組み合わせたEOLEのグラフィックT。素材の上質な艶が、アートピースのような奥行きを引き立てます。'
    },
    'tshirt-logo-collage': {
        brand: 'EOLE',
        name: 'Logo Collage T-Shirt',
        category: 'T-Shirt',
        priceEx: 39000,
        white: 'images/product/shirt/tshirt-logo-collage.webp',
        black: 'images/product/shirt/tshirt-logo-collage-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Compact Egyptian cotton jersey',
        origin: 'Japan',
        materialNote: 'コンパクトに編み立てたエジプト綿を使用し、密度のあるなめらかな手触りに仕上げています。ロゴコラージュがくっきり見える表面感です。',
        link: 'product-tshirt-logo-collage.html',
        description: 'EOLEのロゴ表現をコラージュのように構成したTシャツ。上質なコットンボディが、グラフィックをシャープかつ控えめに見せます。'
    },
    'tshirt-logo-collage2': {
        brand: 'EOLE',
        name: 'Logo Collage 2 T-Shirt',
        category: 'T-Shirt',
        priceEx: 41000,
        white: 'images/product/shirt/tshirt-logo-collage2.webp',
        black: 'images/product/shirt/tshirt-logo-collage2-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Sea Island cotton blend jersey',
        origin: 'Portugal',
        materialNote: '柔らかさと上品な表面感を重視し、シーアイランドコットンブレンドを採用。強めのロゴ構成に、ラグジュアリーな余白を与えています。',
        link: 'product-tshirt-logo-collage2.html',
        description: 'より大胆なロゴコラージュを見せるEOLEのTシャツ。柔らかなプレミアムジャージーが、グラフィックの強さを上品に受け止めます。'
    },
    'tshirt-luna-logo': {
        brand: 'EOLE',
        name: 'Luna Logo T-Shirt',
        category: 'T-Shirt',
        priceEx: 38000,
        white: 'images/product/shirt/tshirt-luna-logo.webp',
        black: 'images/product/shirt/tshirt-luna-logo-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Fine gauge organic cotton jersey',
        origin: 'Japan',
        materialNote: '細番手のオーガニックコットンを使い、静かでなめらかな肌触りに仕上げています。Lunaロゴの控えめな表情を邪魔しない素材感です。',
        link: 'product-tshirt-luna-logo.html',
        description: 'Lunaロゴを静かに配置したEOLEのTシャツ。繊細なコットンの表面が、ミニマルなデザインをより洗練された印象にします。'
    },
    'tshirt-luna-logo2': {
        brand: 'EOLE',
        name: 'Luna Logo 2 T-Shirt',
        category: 'T-Shirt',
        priceEx: 40000,
        white: 'images/product/shirt/tshirt-luna-logo2.webp',
        black: 'images/product/shirt/tshirt-luna-logo2-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Cashmere-touch cotton jersey',
        origin: 'Italy',
        materialNote: '通常のTシャツ素材よりも柔らかく、上品な落ち感が出るカシミヤタッチのコットンジャージーを採用しています。',
        link: 'product-tshirt-luna-logo2.html',
        description: 'Lunaロゴの構成を変えたEOLEのバリエーションモデル。柔らかなジャージー素材が、ミニマルなグラフィックをより上質に見せます。'
    },
    'tshirt-marble': {
        brand: 'EOLE',
        name: 'Marble T-Shirt',
        category: 'T-Shirt',
        priceEx: 46000,
        white: 'images/product/shirt/tshirt-marble.webp',
        black: 'images/product/shirt/tshirt-marble-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'Pima cotton interlock',
        origin: 'Portugal',
        materialNote: '厚みとなめらかさを兼ね備えたピマコットンのインターロック素材を採用。マーブルグラフィックにギャラリーピースのような存在感を与えています。',
        link: 'product-tshirt-marble.html',
        description: 'マーブルグラフィックを大胆に扱ったEOLEのTシャツ。密度のあるプレミアムボディが、デザインに奥行きと構築感を加えます。'
    },
    'tshirt-polo': {
        brand: 'EOLE',
        name: 'Polo T-Shirt',
        category: 'T-Shirt',
        priceEx: 44000,
        white: 'images/product/shirt/tshirt-polo.webp',
        black: 'images/product/shirt/tshirt-polo-B.webp',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        activeSize: 'M',
        material: 'High-twist cotton pique jersey',
        origin: 'Japan',
        materialNote: '強撚コットンを使用し、さらりとしたタッチと形の残りやすさを両立。ポロライクな端正さに合う、張りのある素材感です。',
        link: 'product-tshirt-polo.html',
        description: 'ポロの端正なムードをTシャツの軽さに落とし込んだEOLEの一枚。張りのあるコットンボディが、首元とグラフィックのバランスをきれいに保ちます。'
    },
    'shoe-eole': {
        brand: 'EOLE',
        name: 'EOLE Shoe',
        category: 'Shoe',
        priceEx: 62000,
        white: 'images/product/shoe/shoe-eole.webp',
        black: 'images/product/shoe/shoe-eole-B.webp',
        sizes: ['24', '24.5', '25', '25.5', '26', '26.5', '27', '27.5', '28'],
        activeSize: '27',
        material: 'Italian calf leather / rubber sole',
        origin: 'Italy',
        materialNote: 'きめ細かく豊かな表情を持つイタリアンカーフレザーを使用。ソールは日常での履きやすさを確保しながら、上品な輪郭を保つものを選んでいます。',
        link: 'product-shoe-eole.html',
        description: 'EOLEのミニマルな世界観を足元へ落とし込んだシューズ。上質なレザーの表面感と抑制されたフォルムが、スタイル全体を引き締めます。',
        points: ['装飾を抑えたクリーンなフォルムです。', '白黒どちらも上品なスタイリングに馴染む落ち着いた表情です。', '重く見えすぎないバランスで、足元に存在感を持たせています。'],
        care: ['柔らかい布で汚れを拭き取ってください。', '濡れた場合は風通しの良い日陰で乾かしてください。', '保管時は形を整え、直射日光を避けてください。']
    }
};

const DEFAULT_TSHIRT_POINTS = [
    'グラフィックをただ載せるのではなく、デザインに合う上質な素材を選んでいます。',
    '余白と配置のバランスがきれいに見えるよう、プリント位置を調整しています。',
    '一枚でもジャケットのインナーでも使いやすい、すっきりしたシルエットです。',
    '白と黒で印象が変わりながらも、同じ洗練されたムードを保てます。'
];

const DEFAULT_TSHIRT_CARE = [
    '洗濯ネットを使用し、裏返して弱水流で洗ってください。',
    'プリント部分への直接アイロンは避けてください。',
    '乾燥機は使用せず、形を整えて陰干ししてください。',
    '濃色品は色移りを避けるため、単独での洗濯を推奨します。'
];
 
const SIZE_TABLES = {
    'T-Shirt': [
        ['XS', '62', '46', '41', '19'],
        ['S', '65', '49', '43', '20'],
        ['M', '68', '52', '45', '21'],
        ['L', '71', '55', '47', '22'],
        ['XL', '74', '58', '49', '23']
    ],
    Hoodie: [
        ['S', '66', '56', '50', '58'],
        ['M', '69', '59', '52', '60'],
        ['L', '72', '62', '54', '62'],
        ['XL', '75', '65', '56', '64']
    ],
    Shoe: [
        ['24', '24.0', '-', '-', '-'],
        ['24.5', '24.5', '-', '-', '-'],
        ['25', '25.0', '-', '-', '-'],
        ['25.5', '25.5', '-', '-', '-'],
        ['26', '26.0', '-', '-', '-'],
        ['26.5', '26.5', '-', '-', '-'],
        ['27', '27.0', '-', '-', '-'],
        ['27.5', '27.5', '-', '-', '-'],
        ['28', '28.0', '-', '-', '-']
    ],
    Bag: [
        ['One Size', '38', '34', '12', '-']
    ]
};

const SIZE_HEADERS = {
    'T-Shirt': ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Hoodie: ['Size', 'Length', 'Chest', 'Shoulder', 'Sleeve'],
    Shoe: ['Size', 'JP cm', '-', '-', '-'],
    Bag: ['Size', 'Height', 'Width', 'Depth', '-']
};

function yen(value) {
    return `\u00a5${value.toLocaleString('ja-JP')}`;
}

function getProduct() {
    const key = document.body.dataset.product;
    return PRODUCTS[key] || PRODUCTS['tshirt-geometry'];
}

function setImage(src, color) {
    const image = document.getElementById('product-image');
    const colorLabel = document.getElementById('selected-color');

    image.style.opacity = '0';
    window.setTimeout(() => {
        image.src = src;
        image.alt = `${getProduct().name} ${color}`;
        image.style.opacity = '1';
    }, 160);

    if (colorLabel) {
        colorLabel.textContent = color;
    }
}

function selectColor(button) {
    document.querySelectorAll('.color-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    setImage(button.dataset.image, button.dataset.color);
}

function selectSize(button) {
    document.querySelectorAll('.size-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    document.getElementById('selected-size').textContent = button.textContent;
}

function toggleAcc(button) {
    const item = button.closest('.acc-item');
    const wrapper = item.querySelector('.acc-content-wrapper');
    const isOpen = item.classList.toggle('is-open');
    wrapper.style.maxHeight = isOpen ? `${wrapper.scrollHeight}px` : '0px';
}

function listHtml(items) {
    return `<ul class="detail-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function sizeTableHtml(product) {
    const headers = SIZE_HEADERS[product.category] || SIZE_HEADERS['T-Shirt'];
    const rows = SIZE_TABLES[product.category] || SIZE_TABLES['T-Shirt'];
    return `
        <table class="size-table">
            <thead><tr>${headers.map((head) => `<th>${head}</th>`).join('')}</tr></thead>
            <tbody>
                ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}
            </tbody>
        </table>
        <p class="table-note">単位: cm。製品の特性上、多少の個体差が生じる場合があります。</p>
    `;
}

function renderAccordions(product) {
    const accordion = document.querySelector('.custom-accordion');
    const points = product.points || DEFAULT_TSHIRT_POINTS;
    const care = product.care || DEFAULT_TSHIRT_CARE;

    accordion.innerHTML = `
        <div class="acc-item">
            <button class="acc-header" type="button" onclick="toggleAcc(this)">Details</button>
            <div class="acc-content-wrapper">
                <div class="acc-content">
                    Material: ${product.material}<br>
                    Origin: ${product.origin}<br>
                    ${product.materialNote}
                </div>
            </div>
        </div>
        <div class="acc-item">
            <button class="acc-header" type="button" onclick="toggleAcc(this)">Material Point</button>
            <div class="acc-content-wrapper">
                <div class="acc-content">${listHtml(points)}</div>
            </div>
        </div>
        <div class="acc-item">
            <button class="acc-header" type="button" onclick="toggleAcc(this)">Size Guide</button>
            <div class="acc-content-wrapper">
                <div class="acc-content">${sizeTableHtml(product)}</div>
            </div>
        </div>
        <div class="acc-item">
            <button class="acc-header" type="button" onclick="toggleAcc(this)">Care</button>
            <div class="acc-content-wrapper">
                <div class="acc-content">${listHtml(care)}</div>
            </div>
        </div>
    `;
}

function pickRecommendations(currentKey, product) {
    const entries = Object.entries(PRODUCTS).filter(([key]) => key !== currentKey);
    const sameBrand = entries.filter(([, item]) => item.brand === product.brand);
    const others = entries.filter(([, item]) => item.brand !== product.brand);
    return [...sameBrand, ...others].slice(0, 3);
}

function renderRecommendations(product) {
    const currentKey = document.body.dataset.product;
    const recommendations = pickRecommendations(currentKey, product);
    const existing = document.querySelector('.recommend-section');
    if (existing) {
        existing.remove();
    }

    const section = document.createElement('section');
    section.className = 'recommend-section';
    section.innerHTML = `
        <h2 class="recommend-title">Recommended Items</h2>
        <div class="recommend-grid">
            ${recommendations.map(([, item]) => `
                <a class="recommend-card" href="${item.link}">
                    <div class="recommend-image">
                        <img src="${item.white}" alt="${item.name}">
                        <span class="recommend-badge">SOLD OUT</span>
                    </div>
                    <div class="recommend-brand">${item.brand}</div>
                    <h3 class="recommend-name">${item.name}</h3>
                    <div class="recommend-price">${yen(item.priceEx)} <span class="tax-label">+\u7a0e</span></div>
                </a>
            `).join('')}
        </div>
    `;
    document.body.appendChild(section);
}

function renderProduct() {
    const product = getProduct();

    document.title = `${product.name} | GALLERY EC`;
    document.getElementById('brand').textContent = product.brand;
    document.getElementById('title').textContent = product.name;
    document.getElementById('price-ex').innerHTML = `${yen(product.priceEx)} <span class="tax-label">+\u7a0e</span>`;
    document.getElementById('price-in').textContent = '';
    document.getElementById('description').textContent = product.description;

    const caption = document.querySelector('.soldout-caption');
    if (caption) {
        caption.textContent = 'この商品は現在売り切れです。再入荷までお待ちください。';
    }

    const image = document.getElementById('product-image');
    image.src = product.white;
    image.alt = `${product.name} White`;

    const colorOptions = document.getElementById('color-options');
    colorOptions.innerHTML = '';
    const variants = [{ color: 'White', image: product.white, swatch: '#ffffff' }];
    if (product.black) {
        variants.push({ color: 'Black', image: product.black, swatch: '#000000' });
    }

    variants.forEach((variant, index) => {
        const button = document.createElement('button');
        button.className = `color-btn${index === 0 ? ' active' : ''}`;
        button.type = 'button';
        button.style.backgroundColor = variant.swatch;
        button.dataset.color = variant.color;
        button.dataset.image = variant.image;
        button.setAttribute('aria-label', variant.color);
        button.addEventListener('click', () => selectColor(button));
        colorOptions.appendChild(button);
    });

    document.getElementById('selected-color').textContent = variants[0].color;

    const sizeOptions = document.getElementById('size-options');
    sizeOptions.innerHTML = '';
    product.sizes.forEach((size) => {
        const button = document.createElement('button');
        button.className = `size-btn${size === product.activeSize ? ' active' : ''}`;
        button.type = 'button';
        button.textContent = size;
        button.addEventListener('click', () => selectSize(button));
        sizeOptions.appendChild(button);
    });
    document.getElementById('selected-size').textContent = product.activeSize;
    renderAccordions(product);
    renderRecommendations(product);
}

renderProduct();

let lastScrollY = window.scrollY;
const pageHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (!pageHeader) return;

    if (currentY > lastScrollY && currentY > 80) {
        pageHeader.classList.add('header-hidden');
    } else {
        pageHeader.classList.remove('header-hidden');
    }

    lastScrollY = currentY;
}, { passive: true });
