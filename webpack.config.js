const path = require('path');
const webpack = require('webpack');
const VENDOR_LIBS =[
    'bootstrap',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk',
    'reactstrap',
    'prop-types'
];
module.exports = {
    mode: 'development',
	entry : {
		bundle : './src/index.js',
        vendor: VENDOR_LIBS
	},
	output : {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
	},
	module : {
		rules :[
			{
				use : ['babel-loader'],
				test : /\.js$/,
				exclude : /node-modules/
			},
			{
				use :[
					'style-loader', 
					'css-loader'
				],
				test :/\.css$/
			},
            {
                loader: "file-loader",
                test: /\jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
		]
	},
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery':'jquery',
            'window.$':'jquery',
            'window.jQuery':'jquery'
        })
    ]
}