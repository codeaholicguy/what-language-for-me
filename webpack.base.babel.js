const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = [{
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
    },
    {
        test: /\S+\/core\/images\/\S+.(png|jpg|jpeg)$/,
        loader: 'url-loader'
    },
    {
        test: /\S+\/core\/data\/\S+.json$/,
        loader: 'json-loader'
    },
];
const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true,
    }),
]

module.exports = (options) => ({
    entry: options.entry,

    output: Object.assign({
        path: path.join(__dirname, '/build'),
        publicPath: '/'
    }, options.output),

    devServer: options.devServer,

    module: {
        rules: options.rules ? rules.concat(options.rules) : rules
    },

    plugins: options.plugins ? plugins.concat(options.plugins) : plugins,

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: [
            '.js',
            '.jsx',
            '.react.js',
        ],
    }
});
