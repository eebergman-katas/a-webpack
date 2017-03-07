module.exports = {
    entry: "./src/js/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}

// With this you can now just call 'webpack' in terminal