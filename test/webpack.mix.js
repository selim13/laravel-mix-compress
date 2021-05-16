const mix = require('laravel-mix');

require('../index');

mix.setPublicPath('./test/dist');
mix.css('test/style.css', './');
mix.js('test/app.js', './');
mix.sourceMaps();
mix.version();
mix.compress({ minRatio: 1 });
