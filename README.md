# Mission in Programing

学習の達成率を管理できる動画学習アプリです。

URL: https://video-learning-a4c3a.web.app/

## アプリ概要

1. 達成率を上げる事で楽しみながら学習を進めていける
1. コースとして動画をピックアップする事で、何を勉強していけば良いのか分からない人向けに選ぶ手間を省く

ゲーム感覚で学習を進めて欲しいと思い、「Mission in Programing」というサービス名にしました。

## 開発した背景

- 動画中心に独学で学習を進めていたため、何から手を付けて良いのか分からなかった経験があり、動画を選ぶ手間が省けたら良いなと思っていました。
- 友人に React に興味があると言われた事があり、今までに視聴した中で参考になった動画を纏めてコースとして学習して見てもらい、それを元に学習のお手伝いをしてみようと思っていました。

## 使用画面イメージ

1. ホーム画面

<img src="https://user-images.githubusercontent.com/61864641/105835218-e142eb80-600e-11eb-9ba3-e998cf4446ec.png" width="50%">

2. 各コース画面

<img src="https://user-images.githubusercontent.com/61864641/105835647-675f3200-600f-11eb-99cd-db6187cf1f01.png" width="50%">

3. 動画検索画面

<img src="https://user-images.githubusercontent.com/61864641/105835800-aa210a00-600f-11eb-8e8b-cff3075a6aac.png" width="50%">

4. コース動画一覧

<img src="https://user-images.githubusercontent.com/61864641/105836052-04ba6600-6010-11eb-9efc-1d82e427b7bd.png" width="50%">

5. 動画再生画面

<img src="https://user-images.githubusercontent.com/61864641/105836183-27e51580-6010-11eb-81d0-24a3a7a018a2.png" width="50%">

6. プロフィール

<img src="https://user-images.githubusercontent.com/61864641/105836380-6ed30b00-6010-11eb-89de-13ffca123d23.png" width="50%">

7. 新規登録画面

<img src="https://user-images.githubusercontent.com/61864641/105836550-af328900-6010-11eb-981b-c006685d3658.png" width="50%">

8. コース達成画面

<img src="https://user-images.githubusercontent.com/61864641/105837864-a3e05d00-6012-11eb-9158-7177d51d219d.png" width="50%">

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
    - 動画を視聴し終わると自動的に Complete にチェックがつく
  - コース達成率の判定機能
    - コース達成率が 100％になると紙吹雪が落ちてくる
- メモ機能(CRUD)
  - メモのソート(日付順)
- 達成率グラフ
  - 各コースの達成率がぱっと見で確認・管理
- 画面関連
  - カルーセル（React-id-swiper）
  - ページネーション
- お問合せ機能（Emailjs）
- Twitter シェア機能（React Twitter Embed）
  - ツイートに予め『今日の積み上げ』のハッシュタグ入り
- レスポンシブ対応

## 実装予定機能

- お気に入り動画
- お気に入り動画ランキング
- SNS ログイン(Github と Twitter)
- 自分以外のユーザープロフィール閲覧機能
- 直近でどのユーザーがどの動画を視聴したか表示

## 使用技術（言語、ライブラリ等）

- React 16.13.1
- React Router 5.2.0
- React Player 2.6.2
- React Hook Form 6.13.0
- React Countup 4.3.3
- React Confetti 6.0.0
- React Reveal 1.2.2
- React Twitter Embed 3.0.3
- React-id-swiper 3.0.0
- Sweetalert2 10.12.5
- TypeScript 4.1.3
- Material-ui 4.11.0
- Emailjs 2.6.4
- Firebase
- ESLint
- Prettier
- husky
- lint-staged
