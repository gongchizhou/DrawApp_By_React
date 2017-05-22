var path = require('path');
var webpack = require('webpack');

module.exports = {

	entry: [
		'webpack/hot/dev-server',
		path.resolve(__dirname, './src/index.js')
	],

	output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
	},

	module:{
		loaders:[
			{
				test: /\.js|jsx$/, 
				loaders: 'babel-loader',
				query: {
          			presets: ['es2015', 'react']
        		}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.sass/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|jpg)$/,
				 loader: 'url-loader'
			}
		]
	},

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,
        port: 8080,
    }
}