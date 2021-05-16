# Laravel Mix Compress Extension

Prepares Brotli and Zopfli compressed versions of assets using CompressionWebpackPlugin.

```
 Size Name
230Ki app.js
 55Ki app.js.br
 60Ki app.js.gz
839Ki app.js.map
175Ki app.js.map.br
194Ki app.js.map.gz
170Ki styles.css
 26Ki styles.css.br
 30Ki styles.css.gz
302Ki styles.css.map
 46Ki styles.css.map.br
 52Ki styles.css.map.gz
  634 sprite.svg
  285 sprite.svg.br
  313 sprite.svg.gz
```


## Install

```sh
npm install --save-dev laravel-mix-compress
```

or

```sh
yarn add -D laravel-mix-compress
```

## Usage

```js
// webpack.mix.js
const mix = require('laravel-mix');
require('laravel-mix-compress');

mix.js('src/app.js', 'js');
mix.css('src/app.css', 'css');
mix.compress();
```

### Options

You can pass some options too:
```js
mix.compress({
    productionOnly: false,
    minRatio: 1
});
```

- `productionOnly`: only compress assets on a production run i.e 
  on `mix --production`.
- `useBrotli`: generate Brotli compressed assets.
- `useZopfli`: generate Zopfli compressed assets.

Algorithm specific options:
- `brotliCompressionOptions`: [compression options](https://nodejs.org/api/zlib.html#zlib_class_brotlioptions)
  for Brotli.
- `zopfliCompressionOptions`: [compression options](https://github.com/gfx/universal-zopfli-js#options) 
  for Zopfli.

Common CompressionWebpackPlugin [options](https://webpack.js.org/plugins/compression-webpack-plugin/):

- `test`: include all assets that pass test assertion.\
  Default: `/\.(js|json|css|html|svg|map)(\?.*)?$/i`
- `include`: include all assets matching any of these conditions.
- `exclude`: exclude all assets matching any of these conditions.
- `threshold`: only assets bigger than this size are processed. In bytes.
- `minRatio`: only assets that compress better than this ratio are processed
- `deleteOriginalAssets`: whether to delete the original assets or not.


## Test

```sh
npm ci
npm test
```