var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './test.js',
	output: {
		filename: 'headwyg.js',
		path: path.resolve(__dirname, 'dist')
	},
	module:{
		rules:[
			{
				test: /.jsx?$/,
				use: ['babel-loader']
			},
			{
				test: /.ts$/,
				use: ['babel-loader', 'ts-loader']
			},
			{
				test: /.s?css$/,
				use: ExtractTextPlugin.extract("css-loader!sass-loader")
			}
		]
	},
	plugins:[
		new ExtractTextPlugin("headwyg.css")
	]
};