# Mission in Programing
学習の達成率を管理できる動画学習アプリです。

URL: https://video-app-aee1b.firebaseapp.com/

## アプリ概要
1. 達成率を上げる事で楽しみながら学習を進めていける
1. コースとして動画をピックアップする事で、何を勉強していけば良いのか分からない人向けに選ぶ手間を省く

ゲーム感覚で学習を進めて欲しいと思い、「Mission in Programing」というサービス名にしました。

## 開発した背景
- 動画中心に独学で学習を進めていたため、何から手を付けて良いのか分からなかった経験があり、動画を選ぶ手間が省けたら良いなと思っていました。
- 友人にReactに興味があると言われた事があり、今までに視聴した中で参考になった動画を纏めてコースとして学習して見てもらい、それを元に学習のお手伝いをしてみようと思っていました。

## 使用画面イメージ
![sample](https://user-images.githubusercontent.com/61864641/102328402-5fe94980-3fca-11eb-8d64-86e2c3de3eab.gif)

## 機能一覧
- ユーザー登録関連
  - 新規登録
  - ログイン、ログアウト
  - かんたんログイン（匿名ユーザーログイン）
  - パスワード変更機能
  - ユーザー退会機能
- プロフィール
  - プロフィール編集
  - 画像アップロード（Cloud Storage for Firebase）
   - ヘッダーアイコンにも表示
- 動画ページ関連
 - 動画の絞り込み機能
  - 検索ワードが動画タイトルに含まれているかどうか判定
 - 動画の視聴済み判定機能
  - 動画を視聴し終わると自動的にCompleteにチェックがつく
 - コース達成率の判定機能
  - コース達成率が100％になると紙吹雪が落ちてくる
- メモ機能(CRUD)
 - メモのソート(日付順)
- 達成率グラフ
 - 各コースの達成率がぱっと見で確認・管理
- 画面関連
 - カルーセル（React-id-swiper）
 - ページネーション
- お問合せ機能（Emailjs）
- Twitterシェア機能（React Twitter Embed）
 - ツイートに予め『今日の積み上げ』のハッシュタグ入り
- レスポンシブ対応

## 実装予定機能
- お気に入り動画
- お気に入り動画ランキング
- SNSログイン(GithubとTwitter)
- 自分以外のユーザープロフィール閲覧機能
- 直近でどのユーザーがどの動画を視聴したか表示

## 使用技術（言語、ライブラリ等）
* React 16.13.1
* React Router 5.2.0
* React Player 2.6.2
* React Hook Form 6.13.0
* React Countup 4.3.3
* React Confetti 6.0.0
* React Reveal 1.2.2
* React Twitter Embed 3.0.3
* React-id-swiper 3.0.0
* Sweetalert2 10.12.5
* TypeScript 4.1.3
* Material-ui 4.11.0
* Emailjs 2.6.4
* Firebase
* ESLint
* Prettier
* husky
* lint-staged
