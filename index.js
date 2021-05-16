const mix = require('laravel-mix');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');

class CompressPlugin {
    register(options) {
        this.options = {
            productionOnly: true,
            useBrotli: true,
            useZopfli: true,
            test: /\.(js|json|css|html|svg|map)(\?.*)?$/i,
            ...options
        };
    }

    dependencies() {
        return ['compression-webpack-plugin', '@gfx/zopfli'];
    }

    webpackPlugins() {
        if (this.options.productionOnly && !mix.inProduction()) return [];

        const commonOptionsKeys = [
            'test',
            'include',
            'exclude',
            'threshold',
            'minRatio',
            'deleteOriginalAssets'
        ];
        let commonOptions = {};
        for (const key of commonOptionsKeys) {
            if (key in this.options) {
                commonOptions[key] = this.options[key];
            }
        }

        let plugins = [];
        if (this.options.useBrotli) {
            let brotliOptions = {
                filename: '[path][base].br',
                algorithm: 'brotliCompress',
                ...commonOptions
            };
            if ('brotliCompressionOptions' in this.options)
                brotliOptions.compressionOptions = this.options.brotliCompressionOptions;

            plugins.push(new CompressionPlugin(brotliOptions));
        }

        if (this.options.useZopfli) {
            let zopfliOptions = {
                filename: '[path][base].gz',
                algorithm(input, compressionOptions, callback) {
                    return zopfli.gzip(input, compressionOptions, callback);
                },

                ...commonOptions
            };
            if ('zopfliCompressionOptions' in this.options)
                zopfliOptions.compressionOptions = this.options.zopfliCompressionOptions;

            plugins.push(new CompressionPlugin(zopfliOptions));
        }

        return plugins;
    }
}

mix.extend('compress', new CompressPlugin());
