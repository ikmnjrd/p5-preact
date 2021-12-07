# p5-preact
p5をpreact-cliから作成したテンプレートに乗せてみた。ビルド（SSR）はp5のモジュールがwindowオブジェクトを参照しているためできなかった。なのでビルド時のオプションで`--no-prerender`を指定している。悲しい。

## demo

![demo](https://user-images.githubusercontent.com/40803799/145072506-22ed5f34-0bde-4ffd-87d0-389215432a93.gif)

## 主なディレクトリ
`src/components/p5wrapper` ラッパー

`src/components/sketches` コンポーネントのことを忘れ、p5らしく記述した関数置き場

`src/routes/sketchbook` view


