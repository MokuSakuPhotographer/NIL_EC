# GALLERY EC

EOLE / OKURIH の架空ブランドを扱う、静的なモックECサイトです。
既存フォルダの商品情報・画像を使用し、全49ページを共通デザインで構成しています。

## 閲覧

`index.html` をブラウザで開いて閲覧できます。ビルド、npm、外部サービスへの接続は不要です。
ローカルHTTPサーバーで確認する場合は、このフォルダで以下を実行します。

```sh
python -m http.server 8000 --bind 127.0.0.1
```

その後 `http://127.0.0.1:8000/index.html` を開きます。

## 構成

- `index.html` / `index_old.html`: トップページ。同じデザインを提供し、旧URLを維持します。
- `gallery.html`: 39商品、ブランド・カテゴリ絞り込み、商品名・ブランド検索、価格・商品名の並べ替え。
- `collection.js`: 一覧の表示とURL状態の管理。検索と絞り込みの組み合わせ、履歴の復元に対応します。
- `about.html`: ブランド紹介。EOLE / OKURIH の切り替えとURLハッシュに対応します。
- `cart.html`: 空カートとデモの案内。
- `product-*.html`: 商品詳細39ページと旧商品URL4件の転送案内。
- `product-detail.js`: 既存の `PRODUCTS`、サイズ表、商品詳細の描画、色・サイズ・画像切り替え。
- `product-detail.css`: 商品詳細のデザイン。
- `site-common.css` / `site-common.js`: 共通デザイン、ナビゲーション、モバイルメニュー、ヘッダーのスクロール挙動。
- `Gallery EC.html`: クエリとハッシュを引き継ぐ一覧ページの旧URL。

商品詳細のデータは引き続き `product-detail.js` の `PRODUCTS`、一覧のデータは `gallery.html` の `products` 配列が中心です。一覧のJavaScript描画は両方のデータを参照します。商品更新時はトップの選出カードと、一覧のJavaScript無効時用HTMLにも該当商品があれば反映してください。

フォントは既存の Inter / Noto Sans JP を優先し、端末に存在しない場合はシステムフォントへフォールバックします。外部フォントの読み込みはありません。画像ファイルの圧縮・リネームは行っていません。

## 検証

`scripts/verify-site.cjs` は、ローカルファイルの存在と大文字・小文字、価格整合性、49ページの表示、レスポンシブ表示、検索、並べ替え、URL履歴、商品オプション、メニュー、画像デコード、コンソールエラー、外部リクエストを確認します。

ローカルサーバー起動後、Playwrightが利用できるNode.js環境で実行します。Playwrightは検証専用で、サイトの動作には不要です。

```sh
node scripts/verify-site.cjs
```

環境変数:

- `PLAYWRIGHT_MODULE`: Playwrightモジュールのパス。省略時は `playwright`。
- `BROWSER_PATH`: Chromium系ブラウザの実行ファイル。省略時はPlaywrightの既定ブラウザ。
- `SITE_URL`: 検証先。省略時は `http://127.0.0.1:8000`。
- `QA_OUTPUT`: 指定時は主要ページのデスクトップ・モバイルのスクリーンショットを保存。

## モック仕様

すべての商品はSOLD OUTです。実決済、会員登録、個人情報収集、在庫管理、注文処理、外部トラッキングは実装していません。
