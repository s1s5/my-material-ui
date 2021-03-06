const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: [
        './src/index',
    ],
    resolve: {
        modules: ['node_modules'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s(x)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: true,
                    },
                },
            },
//            {
//                test: /\.css$/,
//                include: /stylesheets|node_modules/,
//                use: ['style-loader', 'css-loader?modules'],
//            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
    ],
};
