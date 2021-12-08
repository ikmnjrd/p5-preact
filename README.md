# p5-preact
p5をpreact-cliから作成したテンプレートに乗せてみた。ビルド（SSR）はp5のモジュールがwindowオブジェクトを参照しているためできなかった。なのでビルド時のオプションで`--no-prerender`を指定している。悲しい。

## demo

![demo](https://user-images.githubusercontent.com/40803799/145239467-8d292b1a-b97d-4df3-83a1-c33728cc99ec.gif)

## 主なディレクトリ
`src/components/p5wrapper` ラッパー

`src/components/sketches` コンポーネントのことを忘れ、p5らしく記述した関数置き場

`src/routes/sketchbook` view


