const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	devtool: "inline-source-map",
	devServer: {
		hot: true,
		compress: true,
	},
	output: {
		path: path.resolve("./dist"),
		filename: "bundle.js",
	},
	performance: {
		maxAssetSize: 100000,
		maxEntrypointSize: 100000,
		hints: false,
	},
	module: {
		rules: [
			{
				test: /\.(?:js|jsx|cjs)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		],
	},
};
