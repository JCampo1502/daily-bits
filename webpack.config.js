'use strict'
const path = require('path')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:{
        app:'./src/app/main.js',
        vendor: './src/app/vendor.js'
    },
    output:{
        filename:'./script/[name].[contenthash].js',
        path:path.resolve(__dirname,'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean:true
    },
    devServer: {
        static: path.resolve(__dirname,'dist'),
        port:8080,
        hot:true
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new HtmlWebpackPlugin({
            template:'./src/pages/home.html',
            filename:'./pages/home.html'
        }),
        new HtmlWebpackPlugin({
            template:'./src/pages/game.html',
            filename:'./pages/game.html'
        }),
        new MiniCssExtractPlugin({filename: './styles/[name].[contenthash].css'}),
    ],
    module:{
        rules: [           
            {
              mimetype: 'image/svg+xml',
              scheme: 'data',
              type: 'asset/resource',
              generator: {
                filename: 'assets/icons/[hash].svg'
              }
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/images/[name].[ext]'
                }
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env', 
                                { 
                                    targets: {
                                        edge: 10,
                                        firefox: 40,
                                        chrome: 40,
                                        safari: 8
                                    },
                                    useBuiltIns: 'entry',
                                    corejs: 3
                                }
                            ]
                        ],
                        plugins: [
                            '@babel/plugin-proposal-optional-chaining',
                            '@babel/plugin-transform-runtime',
                        ]
                    }
                }
            },
            {
                test:/.(scss)$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader',                        
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                            plugins: [
                                autoprefixer
                            ]
                        }
                    }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                quietDeps: true // Suprime las advertencias de deprecación en las dependencias
                            }
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options: {
                            minimize:true
                        }
                    }

                ]
            }
        ]
    }
}
