#!/bin/sh

set -e

test_file() {
    local file="$1"

    [ -f "$file" ]
    zcat "$file.gz" > "$file.gz.out" && cmp --silent "$file" "$file.gz.out"
    brotli --decompress --stdout "$file.br" > "$file.br.out" && cmp --silent "$file" "$file.br.out"
}

test_file test/dist/app.js
test_file test/dist/app.js.map
test_file test/dist/style.css
test_file test/dist/style.css.map
test_file test/dist/images/vector.svg