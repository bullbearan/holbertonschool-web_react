const path = require("path");

module.exports = {
	mode: "production",
	performance: {
		maxAssetSize: 800000,
	},
	entry: "./js/dashboard_main.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg)$/,
				loader: "file-loader",
			},
		],
	},
};
