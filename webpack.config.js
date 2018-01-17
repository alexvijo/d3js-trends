var path = require('path');
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './app.js',
        about: './about/about.js'
    },    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                include: path.join(__dirname, 'src')
            }
        ]
    }
};