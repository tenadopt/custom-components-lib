const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        clean: true,
    },
    resolve: {
        alias: {
            'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
        },
        extensions: ['.ts', '.tsx'],
    },
    externals: {
        react: 'react',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },
};

// import path from 'path';
// import webpack from 'webpack';
// import HtmlWebpackPlugin from "html-webpack-plugin";
//
// type Mode = 'development' | 'production';
//
// interface EnvVariables {
//     mode: Mode;
//     port: number;
// }
//
// export default (env: EnvVariables) => {
//     const isDev = env.mode === 'development'
//
//     const config: webpack.Configuration = {
//         mode: env.mode ?? 'development',
//         entry: path.resolve(__dirname, 'src', 'index.tsx'),
//         output: {
//             path: path.resolve(__dirname, 'build'),
//             filename: "[name].[contenthash].js",
//             libraryTarget: 'umd',
//             clean: true,
//         },
//         plugins: [
//             new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
//             isDev && new webpack.ProgressPlugin()
//         ].filter(Boolean),
//         module: {
//             rules: [
//                 {
//                     test: /\.(ts|tsx)?$/,
//                     use: 'ts-loader',
//                     exclude: /node_modules/,
//                 },
//             ],
//         },
//         resolve: {
//             extensions: ['.tsx', '.ts', '.js'],
//         },
//         devtool: isDev && 'inline-source-map',
//         externals: {
//             react: 'react'
//         }
//     }
//     return config
// }
