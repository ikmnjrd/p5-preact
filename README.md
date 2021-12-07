# p5-preact
p5をpreact-cliから作成したテンプレートに乗せてみた。ビルド（SSR）はp5のモジュールがwindowオブジェクトを参照しているためできなかった。なのでビルド時のオプションで`--no-prerender`を指定している。悲しい。

## demo

![gif](https://user-images.githubusercontent.com/40803799/145070561-214e65e8-336d-4029-b3e2-c728f00ecc26.mp4)

## 主なディレクトリ
`src/components/p5wrapper` ラッパー

`src/components/sketches` コンポーネントのことを忘れ、p5らしく記述した関数置き場

`src/routes/sketchbook` view


