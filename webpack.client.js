const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const config = {
    // Tell webpack the root file(entry point)
    entry: "./src/client/client.js",
    // Tell webpack where to put the output file
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    }
};

module.exports = merge(commonConfig, config);