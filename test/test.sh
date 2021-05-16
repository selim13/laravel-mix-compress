#!/bin/sh

set -e

[ -f "test/dist/app.js" ]
[ -f "test/dist/app.js.gz" ]
[ -f "test/dist/app.js.br" ]
[ -f "test/dist/app.js.map" ]
[ -f "test/dist/app.js.map.gz" ]
[ -f "test/dist/app.js.map.br" ]
[ -f "test/dist/style.css" ]
[ -f "test/dist/style.css.gz" ]
[ -f "test/dist/style.css.br" ]
[ -f "test/dist/style.css.map" ]
[ -f "test/dist/style.css.map.gz" ]
[ -f "test/dist/style.css.map.br" ]
[ -f "test/dist/images/vector.svg" ]
[ -f "test/dist/images/vector.svg.gz" ]
[ -f "test/dist/images/vector.svg.br" ]