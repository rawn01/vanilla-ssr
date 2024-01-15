const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const nodeExternals = require("webpack-node-externals");
const NodeMon = require("nodemon-webpack-plugin");

const config = {
    // Inform webpack that we're bundling a bundle for nodejs rather than the browser
    target: "node",
    // Tell webpack the root file(entry point)
    entry: "./src/index.js",
    // Tell webpack where to put the output file
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },
    externals: [nodeExternals()],
    plugins: [
        new NodeMon({
            script: path.resolve(__dirname, "build", "bundle.js"),
            verbose: true
        })
    ]
};

module.exports = merge(commonConfig, config);