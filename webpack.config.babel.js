import path from 'path';

export default {
	devServer: { inline: true },
	devtool: 'eval',

	entry: './index',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	module: {
	  loaders: [{
	    test: /\.js$/,
	    loaders: ['babel'],
	    exclude: /node_modules/,
	    include: __dirname,
	  }],
	},
};