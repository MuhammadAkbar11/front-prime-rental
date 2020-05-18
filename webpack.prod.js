const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const _common = require('./webpack.common');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = WebpackMerge(_common, {
	mode: 'production',
	output: {
		filename: 'dist/js/[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				handlebarsLoader: {},
			},
		}),
		// new HtmlWebpackPlugin({
		// 	template: './templates/home.html',
		// 	filename: 'home.html',
		// 	templateParameters: _globals.title,
		// }),
		new HtmlWebpackPlugin({
			title: 'test',
			template: './src/views/home-2.hbs',
			filename: 'test.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'dist/css/[name].min.css',
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimizer: [
			new webpack.LoaderOptionsPlugin({
				options: {
					postcss: [autoprefixer()],
				},
			}),
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin(),
		],
	},
	module: {
		rules: [
			{ test: /\.handlebars$/, loader: 'handlebars-loader' },
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				// test: /\.(svg|png|jpe?g|gif)$/i,
				test: /\.(svg|png|jpe?g|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							publicPath: './dist/static/',
							outputPath: './dist/static/',
							useRelativePath: true,
						},
					},
				],
			},
			// {
			// 	test: /\.(svg|png|jpe?g|gif)$/i,
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: '[path][name].[ext]',
			// 			outputPath: 'assets/',
			// 			useRelativePath: true,
			// 		},
			// 	},
			// },
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},

			{
				test: /\.(eot|gif|otf|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '../fonts/',
							outputPath: './dist/fonts/',
						},
					},
				],
			},
		],
	},
});
