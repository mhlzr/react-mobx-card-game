const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production';
    const isDevelopment = argv.mode === 'development';

    return {
        entry: {
            main: './src/index.tsx'
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }]
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx']
        },
        output: {
            filename: `js/[name].[hash:6].js`,
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new CopyWebpackPlugin([{
                from: 'src/static',
                to: 'static'
            }]),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            isProduction ? new PreloadWebpackPlugin({
                rel: 'preload',
                include: 'allAssets',
                as(entry) {
                    if (/\.json$/.test(entry)) return 'fetch';
                    return 'script';
                }
            }) : null
        ].filter(plugin => !!plugin)
    }
}
