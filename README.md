# シャチホコ記念 仮ホームページ

がん哲学外来メディカルカフェ「シャチホコ記念」の静的Webサイトです。

## 構成

- `index.html` トップページ
- `about.html` 私たちについて・代表プロフィール・活動の歩み
- `activities.html` 活動一覧
- `cafe.html` シャチホコ記念カフェ
- `education.html` 学校でのがん教育
- `library.html` 図書館でのみんなのがん教室
- `cards.html` こころのたねカードゲーム
- `care.html` 病院へのケアグッズ寄付
- `request.html` 講演・授業のご依頼
- `styles.css` 共通デザイン
- `script.js` スマートフォン用メニュー

## Cloudflare Pages で公開する設定

1. Cloudflare の Workers & Pages を開く
2. `Create application` → `Pages` → GitHubリポジトリの読み込み
3. `Hikonyannnn/shachihokokinen` を選択
4. Production branch: `main`
5. Framework preset: なし
6. Build command: `exit 0`
7. Build output directory: `.`
8. Deploy

## 正式公開前に差し替えるもの

- トップのキャラクター画像
- 代表写真
- 活動写真
- Facebook最新投稿3件の画像
- カフェの共通GoogleフォームURL
- 活動開始年と実績数の最終確認
- 各ページの文章・開催情報・費用案内

## 画像を置く場合の例

`assets/images/` フォルダを作り、HTML内のプレースホルダーを画像タグに差し替えます。

```html
<img src="assets/images/kanako-hikoda.jpg" alt="シャチホコ記念代表 彦田かな子">
```

## 注意

このサイトは医療相談や診断を行うものではありません。写真、学校名、病院名、参加者の声は、公開許可を確認したものだけを掲載してください。
