const path = require('path');

module.exports = {
    entry: './src/inject.ts',
    output: {
        filename: 'inject.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        loaders: [
            {  loader: "ts-loader" }
        ]
    }
};