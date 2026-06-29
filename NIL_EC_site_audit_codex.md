# NIL_EC サイト統一・品質修正指示（Codex投入用）

## 前提

このリポジトリは、架空ブランド `EOLE` / `OKURIH` を扱う静的なECモックサイトです。実決済・実在庫・会員登録・住所・電話番号・メールアドレス・カード情報などの個人情報収集は実装しないでください。

既存仕様どおり、商品は原則 `SOLD OUT` として扱い、カートは空カート表示のまま維持してください。購入可能に見える導線、注文完了処理、外部決済連携、トラッキングタグは追加しないでください。

## 解析対象

- ルート直下HTML: 47件
- 現行商品詳細: `product-detail.css` + `product-detail.js` + `body data-product="..."` 形式
- 商品データ: `product-detail.js` の `PRODUCTS` 39件
- 商品一覧: `gallery.html` 内 `products` 配列 39件
- 画像: `images/` 配下 141件

## 解析結果サマリー

### 問題なしと判定した箇所

- HTML / JS / CSSから参照されているローカル画像・HTML・CSS・JSのリンク切れは検出されませんでした。
- `gallery.html` の商品一覧39件と、`product-detail.js` の `PRODUCTS` 39件は、商品名・価格・リンクの対応が一致しています。
- `PRODUCTS` の各 `link` は実在する商品詳細HTMLを指しています。
- 現行商品詳細ページの `body data-product` は `PRODUCTS` のキーと一致しています。
- `product-detail.js` と各HTML内インラインJSは構文エラーなしと判定しました。
- `img` の `alt` 属性欠落は検出されませんでした。ただし、現行商品詳細ページのメイン画像は初期HTMLでは `alt=""` で、JS描画後にaltが入る設計です。

### 修正が必要な主要箇所

1. ヘッダー構造・CSS・スクロール挙動がページ群で統一されていません。
2. フッターが `index.html` と `about.html` にしか存在しません。`gallery.html`、`cart.html`、全商品詳細ページ、旧式商品ページにありません。
3. 商品詳細ページは `product-detail.css` を読むだけで、Google Fontsの読み込みがありません。`Inter` / `Noto Sans JP` 指定に対して実フォントが読み込まれません。
4. `gallery.html` はファイル名にスペースがあり、全体リンクも `gallery.html?...` になっています。静的サイト運用上不安定です。
5. `product-tshirt.html`、`product-tshirt-alpha.html`、`product-tshirt-beta.html`、`product-shoes.html` は旧式インライン商品詳細ページです。現行テンプレートと統一されておらず、文字化けも検出されます。
6. `product-tshirt-alpha.html` と `product-tshirt-beta.html` には有効な `ADD TO CART` ボタンが存在します。モックサイトの安全方針と不一致です。
7. `<button>` に `type="button"` がない箇所が多数あります。特に商品詳細ページの `SOLD OUT` ボタン、旧式ページのサイズ/アコーディオン/数量ボタンに検出されます。
8. 画像はリンク切れではありませんが、正方形・横長画像を3:4枠に `object-fit: cover` で表示しているため、商品によって大きくトリミングされる可能性があります。
9. `images/product/bag/bag-geometry.webp` は 6000x4500 / 約3.8MB と大きく、一覧カード表示には過剰です。
10. `images/logo/EOLE 2_White.png` は未使用です。
11. アニメーション・スクロール処理が各ページで個別実装され、`prefers-reduced-motion` 対応も全ページに一貫していません。

## 修正方針

### P0: モックECとしての安全整合性を最優先

- 実決済、注文確定、購入可能化、個人情報入力欄は実装しない。
- `product-tshirt-alpha.html` と `product-tshirt-beta.html` の `ADD TO CART` を `disabled` の `SOLD OUT` に変更する。
- 旧式ページを残す場合でも、購入できるように見えるUIを残さない。
- `cart.html` は空カートのまま維持する。

### P1: ヘッダー/フッターの統一

以下のどちらかの方法で、全ページのヘッダーとフッターを統一してください。

推奨: 静的サイトのまま、共通CSS/JSを追加して重複を減らす。

- `site-common.css` を作成し、以下を集約する。
  - CSS変数: `--bg`, `--text`, `--muted`, `--line`, `--blue`, `--soft`, `--image-bg`
  - `body`, `a`, `img`, `header`, `.nav-list`, `.dropdown`, `.cart-link`, `footer`
  - スクロール時の `.header-hidden`, `.header-compact`
  - モバイルナビの横スクロール/折返し制御
  - `@media (prefers-reduced-motion: reduce)`
- `site-common.js` を作成し、以下を集約する。
  - ヘッダーの表示/非表示
  - スクロール時のコンパクト化
  - モバイル時のドロップダウン開閉
  - `requestAnimationFrame` によるスクロール処理の間引き
- `index.html`、`about.html`、`cart.html`、`gallery.html`、全現行商品詳細HTMLに共通CSS/JSを読み込ませる。
- `footer` を全ページに追加する。
- フッター文言は既存と同じ以下で統一する。

```html
<footer class="site-footer">
  <span>GALLERY EC</span>
  <span>Curated by EOLE / OKURIH</span>
</footer>
```

### P2: `gallery.html` のリネームとリンク更新

- `gallery.html` を `gallery.html` にリネームする。
- 全HTML / JS内の `gallery.html` 参照を `gallery.html` に更新する。
- 既存リンク互換が必要な場合は、`gallery.html` を削除せず、`gallery.html` へ誘導する最小限の静的リダイレクト/案内ページとして残す。
- `gallery.html` 内のナビリンクは `href="#"` ではなく、実URLにする。

例:

```html
<a class="nav-link" href="gallery.html?filter=eole-shirts" data-filter="eole-shirts">Shirt</a>
```

JS側ではクリック時に `preventDefault()` してフィルターを即時適用してよいが、JS無効時にもURL遷移できる構造にする。

### P3: 現行商品詳細ページの統一

対象: `body data-product="..."` を持つ39件の商品詳細HTML。

- `<head>` にフォント読み込みまたは `site-common.css` 内の `@import` を追加する。
- `<title>Product Detail | GALLERY</title>` はJSで更新されるが、可能なら初期表示も商品名に合わせる。最低限、JS未実行時でも不自然すぎないタイトルにする。
- `.btn-add` に `type="button"` を追加する。

```html
<button class="btn-add" type="button" disabled>SOLD OUT</button>
```

- すべての商品詳細ページに共通フッターを追加する。
- ヘッダー内の `aria-label` / `title` を日本語または英語のどちらかに統一する。既存の主要ページに合わせるなら `aria-label="カートを見る"` / `title="カートを見る"` に統一する。
- ヘッダーDOMの整形差分だけでページごとに別物にならないよう、同一マークアップへ揃える。
- `getProduct()` のフォールバックは、現在 `PRODUCTS['tshirt-geometry']` へ黙って落ちる設計です。データ不整合を隠すため、以下のように警告を出すか、画面上に安全なエラー表示を出してください。

```js
function getProduct() {
  const key = document.body.dataset.product;
  if (!PRODUCTS[key]) {
    console.warn(`Unknown product key: ${key}`);
    return PRODUCTS['tshirt-geometry'];
  }
  return PRODUCTS[key];
}
```

### P4: 旧式商品ページの扱い

対象:

- `product-tshirt.html`
- `product-tshirt-alpha.html`
- `product-tshirt-beta.html`
- `product-shoes.html`

検出事項:

- 現行商品詳細テンプレートを使っていません。
- ヘッダー構造が独自です。
- フッターがありません。
- 文字化け文字列が多数あります。
- `product-tshirt-alpha.html` / `product-tshirt-beta.html` は `ADD TO CART` が有効です。
- 複数のボタンに `type="button"` がありません。

修正方針:

- これらを現行テンプレートに移行するか、`legacy` として明確に隔離してください。
- 削除しない方針を維持する場合でも、最低限以下を実施してください。
  - `ADD TO CART` を `disabled` の `SOLD OUT` に修正。
  - 文字化けしている日本語を修正、または旧式ページとして非表示・非導線化。
  - 共通ヘッダー/フッターに統一。
  - 全ボタンに `type="button"` を追加。
- 新規商品のベースとして旧式ページを使わないことをAGENTS.mdに追記または維持してください。

### P5: 画像表示・パフォーマンス修正

- 画像パスのリンク切れは現状ありません。既存画像のリネームは原則避けてください。
- 一覧カード・レコメンド・商品詳細で画像表示の方針を統一してください。
- 正方形/横長画像を3:4枠に入れる商品は、大きく切れすぎないように調整してください。

候補:

```css
.card-image img,
.recommend-image img,
.product-image-wrapper img {
  object-position: center;
}
```

必要に応じて、商品詳細のメイン画像だけは `object-fit: contain` にするクラスを商品データから付与できる設計にしてください。全体を一律 `contain` にすると一覧の見え方が弱くなる可能性があるため、対象を限定してください。

- `images/product/bag/bag-geometry.webp` は約3.8MBあるため、同じパス名のまま適正サイズへ圧縮するか、一覧用の軽量画像を追加して `Gallery` 側だけ差し替えてください。
- `loading="lazy"` と `decoding="async"` を、ファーストビュー外の画像に付与してください。
- 可能であれば `width` / `height` を追加し、CLSを抑制してください。
- 未使用の `images/logo/EOLE 2_White.png` は、使う予定がなければ未使用として記録だけ残し、無理に削除しないでください。

### P6: アニメーション・スクロール処理の統一

- `index.html`、`about.html`、`gallery.html`、`product-detail.js` に分散しているヘッダースクロール処理を `site-common.js` へ寄せる。
- inline styleで `header.style.padding` や `header.style.transform` を直接変更する処理は避け、CSSクラスで制御する。
- `prefers-reduced-motion: reduce` を共通CSSで全ページに適用する。

例:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- `Gallery` の `rotateBg`、カードフェード、商品詳細のフェード、画像ホバー拡大が過剰に競合しないように、共通の速度変数を使う。
- スクロールイベントは `requestAnimationFrame` で間引く。

### P7: アクセシビリティ修正

- ドロップダウンの親リンク/ボタンに `aria-expanded` を付与し、開閉時に更新する。
- 可能ならブランドドロップダウンは `<button type="button">` + 実リンクの組み合わせにする。ただし既存デザインを崩さないこと。
- `about.html` の `.brand-card` は `div role="button"` ではなく、可能なら `<button type="button" class="brand-card">` にする。
- 商品詳細のアコーディオンボタンに `aria-expanded` を付与し、`toggleAcc()` で更新する。
- ギャラリー矢印・ドットに `aria-label` を付与済みだが、現在画像番号が分かりにくいため、ドットには `aria-label="画像1を表示"` のようなラベルを付与する。
- `SOLD OUT` ボタンは操作不可でよいが、`disabled` と `aria-disabled="true"` の整合を取る。

## 変更対象ファイル

優先的に確認・編集するファイル:

```text
AGENTS.md
index.html
about.html
cart.html
gallery.html
product-detail.css
product-detail.js
product-*.html
```

追加候補:

```text
site-common.css
site-common.js
gallery.html
```

## 変更後の確認項目

1. `index.html`、`about.html`、`gallery.html`、`cart.html`、代表的な商品詳細3件を開き、ヘッダー/フッターの見た目と位置が統一されていること。
2. `gallery.html?brand=eole`、`gallery.html?brand=okurih`、`gallery.html?filter=eole-shirts`、`gallery.html?filter=okurih-acc-bags` が初期表示で正しく絞り込まれること。
3. 旧 `gallery.html?...` の互換を残す場合は、新しい `gallery.html?...` に誘導されること。
4. 商品詳細ページでメイン画像、ギャラリー、色選択、サイズ選択、アコーディオン、レコメンドが動くこと。
5. すべての商品が `SOLD OUT` 表示のままで、購入可能なUIに変化していないこと。
6. `product-tshirt-alpha.html` と `product-tshirt-beta.html` に有効な `ADD TO CART` が残っていないこと。
7. 文字化け文字列が旧式ページに残っていないこと。残す場合は旧式ページとして非導線化されていること。
8. 画像リンク切れがないこと。
9. モバイル幅375〜430pxでヘッダーが横にはみ出さず、カートボタンとナビが重ならないこと。
10. ブラウザコンソールにエラーが出ないこと。

## 静的確認コマンド例

ローカル確認:

```bash
python -m http.server 8000
```

リンク文字列確認:

```bash
grep -RIn "gallery.html\|ADD TO CART\|繧\|縺\|莉\|菴\|逕" -- *.html *.js *.css
```

`gallery.html` の参照が残る場合は、互換用ファイルだけに残っている状態にしてください。

## 完了条件

- 全ページのヘッダー/フッターが統一されている。
- 現行商品詳細ページが共通CSS/JSと共通フッターを持つ。
- 旧式商品ページの危険な購入導線と文字化けが解消または隔離されている。
- 画像・リンク切れが0件のまま維持されている。
- 実決済・個人情報収集・注文処理が追加されていない。
- 変更後に、変更ファイル一覧と確認結果を短く報告する。
