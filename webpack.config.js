const Path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    },
    output: {
        path: Path.resolve(__dirname, 'public'),
        publicPath: '/public/',
        filename: 'app.js'
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.riot$/,
                exclude: /node_modules/,
                use: [{
                    loader: '@riotjs/webpack-loader',
                    options: {
                        hot: false, // set it to true if you are using hmr
                        // add here all the other @riotjs/compiler options riot.js.org/compiler
                        // template: 'pug' for example
                    }
                }]
            },
            {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
            }
        ]
    }
}