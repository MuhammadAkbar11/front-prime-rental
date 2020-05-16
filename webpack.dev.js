const path = require('path');
const _common = require('./webpack.common');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const _globals = require('./src/_globals');

module.exports = WebpackMerge(_common, {
	mode: 'development',
	output: {
		filename: 'js/[name].bundle.js',
		path: path.resolve(__dirname, 'asstes/dist'),
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'assest/pages'),
		index: 'index.html',
		port: 9000,
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(eot|gif|otf|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [autoprefixer()],
			},
		}),
		// new MiniCssExtractPlugin({
		// 	filename: 'css/[name].css',
		// }),
		new HtmlWebpackPlugin({
			template: './templates/home.html',
			templateParameters: _globals.title,
		}),
	],
});
