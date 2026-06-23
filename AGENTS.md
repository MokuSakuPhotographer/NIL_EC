# AGENTS.md

## プロジェクト概要

このリポジトリは、架空ブランド `EOLE` / `OKURIH` を扱う静的なECモックサイトです。実決済・実在庫・会員登録・個人情報収集を行わないデモ用サイトとして扱ってください。

- 構成は静的HTML / CSS / JavaScriptです。
- ビルドツール、npm、フレームワークは前提にしません。
- 商品詳細ページは共通CSS `product-detail.css` と共通JS `product-detail.js` によって描画されます。
- 商品情報の中心は `product-detail.js` の `PRODUCTS` オブジェクトです。
- 商品一覧の中心は `Gallery EC.html` 内の `products` 配列です。
- 既存デザイン、余白、アニメーション、ヘッダー挙動、SOLD OUT 表示を維持してください。

## 重要な安全方針

このサイトはモックECとして扱います。以下は実装しないでください。

- 実決済、外部決済サービス連携、カード情報入力欄
- ログイン、会員登録、住所、電話番号、メールアドレスなどの個人情報収集
- 実在ブランド・実在店舗と誤認させる表記
- フィッシング、購入誘導、在庫あり表示、注文完了処理
- 外部トラッキング、広告タグ、解析タグの追加

既存仕様どおり、商品は基本的に `SOLD OUT` として扱います。カートページも空カート表示を維持します。実際に購入できるようにする変更は、明示指示がある場合でも慎重に確認し、モック用途を逸脱しない形に限定してください。

## ディレクトリ構成

```text
.
├── index.html                    # トップページ
├── Gallery EC.html               # 商品一覧 / ブランド・ジャンル絞り込み
├── about.html                    # ブランド紹介
├── cart.html                     # 空カートページ
├── product-detail.css            # 現行の商品詳細共通CSS
├── product-detail.js             # 現行の商品詳細共通JS / 商品データ
├── product-*.html                # 商品詳細ページ
└── images/
    ├── logo/                     # ブランドロゴ
    └── product/
        ├── bag/
        ├── hoodie/
        ├── shirt/
        ├── shoe/
        └── tops/
```

## 現行の商品詳細ページ仕様

現行の商品詳細ページは、HTML側に本文データを直接書かず、以下の形式で `product-detail.js` に描画を任せます。

```html
<body data-product="商品slug">
    ...
    <script src="product-detail.js"></script>
</body>
```

新規商品を追加する場合は、この現行形式を使用してください。`product-tshirt.html`、`product-tshirt-alpha.html`、`product-tshirt-beta.html`、`product-shoes.html` は旧式のインライン詳細ページです。明示指示がない限り、新規商品のベースには使わないでください。

## 商品追加時の必須更新箇所

新規商品を追加するときは、最低限以下をすべて更新してください。

1. `images/product/<genre>/` に商品画像を配置する
2. `product-<slug>.html` を作成する
3. `product-detail.js` の `PRODUCTS` に商品データを追加する
4. `Gallery EC.html` の `products` 配列に一覧カードを追加する
5. 追加ジャンルやブランドが既存ナビに存在しない場合のみ、ナビ、`validFilters`、絞り込みクラスを追加する
6. リンク切れ、画像パス、`data-product` と `PRODUCTS` キーの一致を確認する

`index.html` のFeaturedやHeroは、明示指示がある場合のみ変更してください。

## 商品slug / ファイル命名規則

- slugは英小文字・数字・ハイフンで統一します。
- 商品詳細HTMLは `product-<slug>.html` とします。
- `body data-product` と `product-detail.js` の `PRODUCTS` キーは完全一致させます。
- 商品リンクは `link: 'product-<slug>.html'` とします。

例:

```text
slug: leather-mini-bag
HTML: product-leather-mini-bag.html
data-product="leather-mini-bag"
PRODUCTS['leather-mini-bag']
```

## 画像配置ルール

商品画像は、商品ジャンルに応じて以下へ配置してください。

| 商品種別 | 配置先 |
|---|---|
| T-Shirt / Shirt | `images/product/shirt/` |
| Hoodie | `images/product/hoodie/` |
| Shoe | `images/product/shoe/` |
| Bag | `images/product/bag/` |
| Outerwear / Dress / Tops系 | `images/product/tops/` |

既存ファイルにはスペースや大文字を含む名前があります。パスは大文字・小文字・スペースまで完全一致させてください。

画像バリエーションの慣例:

- メイン画像: `Product Name.webp`
- 黒バリエーション: `Product Name-B.webp` または既存に合わせた `-B` サフィックス
- モデル画像: `Product Name-model1.webp` / `Product Name-Model1.webp` など既存命名に合わせる

画像が白1色のみ、または単色展開の場合は、`black: ''` と `hideColorOptions: true` を指定してください。

## `product-detail.js` の商品データ規則

`PRODUCTS` に追加する商品は、既存商品と同じ構造にしてください。

必須フィールド:

```js
'商品slug': {
    brand: 'EOLE',
    name: '商品名',
    category: 'T-Shirt',
    priceEx: 12000,
    white: 'images/product/shirt/example.webp',
    black: '',
    gallery: {
        White: [
            'images/product/shirt/example.webp',
            'images/product/shirt/example-model1.webp'
        ]
    },
    hideColorOptions: true,
    sizes: ['S', 'M', 'L'],
    activeSize: 'M',
    material: '素材表記',
    origin: 'Japan',
    materialNote: '素材の特徴説明。',
    link: 'product-example.html',
    description: '商品説明。',
    points: ['特徴1。', '特徴2。', '特徴3。'],
    care: ['ケア方法1。', 'ケア方法2。', 'ケア方法3。']
}
```

### category の指定

`category` は既存の `SIZE_TABLES` / `SIZE_HEADERS` と対応します。原則として以下から選択してください。

- `T-Shirt`
- `Shirt`
- `Outerwear`
- `Dress`
- `Hoodie`
- `Shoe`
- `Bag`

新しい `category` を追加する場合は、必ず `SIZE_TABLES` と `SIZE_HEADERS` も追加してください。

### サイズ指定

商品に合うサイズ表記に調整してください。

| 商品 | sizes例 | activeSize例 |
|---|---|---|
| Tシャツ | `['XS', 'S', 'M', 'L', 'XL']` | `'M'` |
| シャツ / アウター / ドレス | `['S', 'M', 'L']` | `'M'` |
| フーディー | `['S', 'M', 'L', 'XL']` | `'M'` |
| 靴 | `['24', '24.5', '25', '25.5', '26', '26.5', '27', '27.5', '28']` | `'27'` |
| バッグ / 小物 | `['One Size']` | `'One Size'` |

バッグや特殊形状の商品は、`sizeRows` と `sizeHeaders` を商品に合わせて追加してください。

例:

```js
sizeRows: [['One Size', '28', '34', '10', '72']],
sizeHeaders: ['Size', 'Height', 'Width', 'Depth', 'Strap'],
```

靴のサイズ表はJP cm基準にしてください。服は着丈・身幅・肩幅・袖丈のように既存表記に合わせます。

### 素材表記

素材は商品から自然に想像できるものにしてください。既存ブランドの方向性に合わせ、過度に現実離れした素材や高級素材を乱用しないでください。

- EOLE: 上品、ミニマル、現代的、素材感重視
- OKURIH: ストリート、軽さ、グラフィック、カジュアル、エッジ

例:

| 商品 | 素材例 |
|---|---|
| Tシャツ | `Mercerized cotton jersey`, `Organic cotton jersey` |
| シャツ | `Cotton poplin`, `Cotton modal shirting`, `Triacetate blend broadcloth` |
| アウター | `Cotton nylon shell`, `Cotton gabardine`, `Linen cotton twill` |
| フーディー | `Heavy cotton fleece blend` |
| 靴 | `Calf leather / rubber sole`, `Smooth leather / metal buckle` |
| バッグ | `Nylon twill`, `Vegan leather`, `Canvas / synthetic leather trim` |

## `Gallery EC.html` の一覧カード規則

商品を追加したら、`Gallery EC.html` 内の `products` 配列にカードを追加してください。

```js
{ id: 26, brand: 'EOLE', name: '商品名', price: '¥12,000 (税込)', filterClass: 'brand-eole eole-shirts', soldOut: true, link: 'product-example.html', img: 'images/product/shirt/example.webp' }
```

### id

- 既存最大IDに +1 した連番にします。
- 重複させないでください。

### filterClass

既存分類へ正しく振り分けてください。

| ブランド / ジャンル | filterClass |
|---|---|
| EOLE Tops | `brand-eole eole-tops` |
| EOLE Shirt / T-Shirt | `brand-eole eole-shirts` |
| EOLE Shoes | `brand-eole eole-shoes` |
| EOLE Bags | `brand-eole eole-bags` |
| OKURIH Tops / Hoodie | `brand-okurih okurih-tops` |
| OKURIH Bags | `brand-okurih okurih-accessories okurih-acc-bags` |

OKURIHのバッグは既存どおり `okurih-accessories` と `okurih-acc-bags` の両方を付与してください。

## 商品詳細HTML作成ルール

新規HTMLは、既存の現行商品ページから近いカテゴリのものをコピーして作成します。

- Tシャツ: `product-tshirt-geometry.html` など
- シャツ: `product-oversized-shirt.html` など
- バッグ: `product-bag-hobo.html` など
- 靴: `product-modern-oxford.html` など
- アウター: `product-anorak-jacket.html` など
- フーディー: `product-hoodie-heart.html` など

変更する主な箇所:

```html
<body data-product="新しいslug">
```

それ以外のDOM構造、クラス名、`id`、`script src="product-detail.js"` は保持してください。商品名、価格、説明、画像などをHTMLに直書きしないでください。

## デザイン・実装ルール

- 既存の白背景、黒文字、ブルーアクセント、余白感を維持します。
- フォントは既存の `Inter` / `Noto Sans JP` を維持します。
- Vanilla JavaScriptで実装します。新規フレームワークやライブラリは追加しないでください。
- CSS変数、既存クラス名、アニメーションの意味を変えないでください。
- レスポンシブ対応を壊さないでください。
- `aria-label`、`alt`、ボタン種別 `type="button"` を適切に設定してください。
- 既存の `SOLD OUT` バッジ、無効化ボタン、売り切れ文言を維持してください。
- 価格表記は `¥12,000 (税込)` の形式に統一します。

## ブランド・カテゴリ追加時のルール

既存ブランドは `EOLE` と `OKURIH` です。新ブランド追加は、単に商品データを追加するだけでは不十分です。以下も確認してください。

- `Gallery EC.html` のナビゲーション
- `validFilters`
- `brandCopy`
- `about.html` のブランド紹介カードと詳細パネル
- 画像ロゴの配置
- ヘッダーのドロップダウン

新カテゴリ追加時も同様に、ナビゲーション、フィルター、`SIZE_TABLES`、`SIZE_HEADERS`、表示ラベルを揃えてください。

## 既存ファイルの扱い

- `.git/` は編集しないでください。
- 画像の一括圧縮・リネームは、明示指示がない限り行わないでください。既存リンクが壊れやすいためです。
- 旧式の商品ページは削除しないでください。参照や比較用として残します。
- 大規模な共通化、ファイル分割、ビルド導入は、明示指示がない限り行わないでください。

## 確認手順

変更後は最低限、以下を確認してください。

1. `product-<slug>.html` を開き、商品情報が表示される
2. メイン画像とギャラリー画像が表示される
3. 色ボタンが必要な商品だけ表示される
4. サイズボタンとSize Guideが商品に合っている
5. `Gallery EC.html` で該当ブランド・ジャンルに表示される
6. `Gallery EC.html?filter=eole-shirts` などのURL初期フィルターが動く
7. 価格が一覧と詳細で一致している
8. すべて `SOLD OUT` 表示のままになっている
9. ブラウザコンソールにエラーがない
10. 画像パスの大文字・小文字・スペースが実ファイル名と一致している

簡易ローカル確認は以下で実行できます。

```bash
python -m http.server 8000
```

その後、ブラウザで `http://localhost:8000/index.html` を開いて確認してください。

## Codexへの作業方針

- まず関連ファイルを読み、既存パターンを確認してから編集してください。
- 変更範囲は依頼に必要な最小範囲に限定してください。
- 商品追加では、一覧・詳細・画像・フィルターの整合性を最優先してください。
- 商品説明、素材、サイズ表は既存商品の文体と密度に合わせて作成してください。
- 変更後は、どのファイルを変更したか、どの確認を行ったかを簡潔に報告してください。
