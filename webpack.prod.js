const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const _common = require('./webpack.common');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

const _data = require('./src/cars.json');

module.exports = WebpackMerge(_common, {
	mode: 'production',
	output: {
		filename: 'dist/js/[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	watch: true,
	watchOptions: {
		ignored: /node_modules/,
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				handlebarsLoader: {},
				postcss: [autoprefixer()],
			},
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'src/img', to: 'dist/static/img' },
				{ from: 'src/svg', to: 'dist/static/svg' },
			],
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
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
			title: 'PrimeRental | Tentang Kami',
			template: './src/views/about.hbs',
			filename: 'about.html',
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
		new HtmlWebpackPlugin({
			title: 'PrimeRental | Kontak Kami',
			template: './src/views/contact.hbs',
			filename: 'contact.html',
			templateParameters: _data,
		}),
		new HtmlWebpackPlugin({
			title: 'PrimeRental | Mobil Kami',
			template: './src/views/list-cars.hbs',
			filename: 'list-cars.html',
			templateParameters: _data,
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
