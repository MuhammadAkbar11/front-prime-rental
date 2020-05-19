const path = require('path');
const _common = require('./webpack.common');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const Handlebars = require('handlebars');

const _data = require('./src/cars.json');

module.exports = WebpackMerge(_common, {
	mode: 'development',
	output: {
		filename: 'js/[name].bundle.js',
		path: path.resolve(__dirname, 'asstes/dist'),
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'assest/pages'),
		index: 'index.html',
		port: 2001,
	},

	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				handlebarsLoader: {},
				postcss: [autoprefixer()],
			},
		}),
		// new MiniCssExtractPlugin({
		// 	filename: 'css/[name].css',
		// }),

		new CopyPlugin({
			patterns: [
				{ from: 'src/img', to: 'assets/dist/static/img' },
				{ from: 'src/svg', to: 'assets/dist/static/svg' },
			],
		}),
		new HtmlWebpackPlugin({
			title: 'PrimeRental | Home',
			template: './src/views/home.hbs',
			filename: 'index.html',
			templateParameters: _data,
		}),
		new HtmlWebpackPlugin({
			title: 'PrimeRental | Detail',
			template: './src/views/detail.hbs',
			filename: 'detail.html',
			templateParameters: _data,
		}),
		new HtmlWebpackPlugin({
			title: 'PrimeRental | Login',
			template: './src/views/login.hbs',
			filename: 'login.html',
			templateParameters: _data,
		}),
		new HtmlWebpackPlugin({
			title: 'PrimeRental | Registrasi',
			template: './src/views/registrasi.hbs',
			filename: 'registrasi.html',
			templateParameters: _data,
		}),
	],

	module: {
		rules: [
			{
				test: /\.hbs$/,
				use: [
					{
						loader: 'handlebars-loader',
					},
				],
			},

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
				// test: /\.(jpg|JPG|jpeg|png|svg)$/i,
				test: /\.(png|jpe?g|gif|svg)$/,
				include: [path.resolve(__dirname, 'src/')],
				use: {
					loader: 'file-loader',
					options: {
						sourceMap: true,
						name: '[path][name].[ext]',
						// context: path.resolve(__dirname, 'src'),
						include: path.join(__dirname, 'src'),
					},
				},
			},
			{
				test: /\.(eot|gif|otf|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							include: path.join(__dirname, 'src'),
						},
					},
				],
			},
		],
	},
});
