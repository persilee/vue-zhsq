const webpack = require('webpack');

module.exports = {
	baseUrl: './',
	productionSourceMap: false,
	devServer: {
		proxy: null
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'windows.jQuery': 'jquery'
			})
		]
	}
};
