module.exports = {
	entry: {
		main: './src/index.js',
		vendor: './src/vendors.js',
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
			{
				// test: /\.(svg|png|jp?eg|gif)$/,
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name(file) {
								if (process.env.NODE_ENV === 'development') {
									return '[name].[ext]';
								}
								return '[name].[ext]';
							},
							// publicPath: '/img/',
							// outputPath: '../images/',
						},
					},
				],
			},

			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
			},
		],
	},
};
