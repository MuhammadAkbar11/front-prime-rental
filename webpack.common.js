module.exports = {
	entry: {
		vendor: './src/vendors.js',
		main: './src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						plugins: ['transform-class-properties'],
					},
				},
			},
			// {
			// 	test: /\.(eot|gif|otf|png|jpe?g|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			// 	// test: /\.(png|jpe?g|svg|gif)$/i,
			// 	// use: ['file-loader'],
			// 	loader: 'file-loader',
			// 	options: {
			// 		name: '[path][name].[ext]',
			// 		// publicPath: '/assets/images/',
			// 		// outputPath: '../images/',
			// 	},
			// },
		],
	},
};
