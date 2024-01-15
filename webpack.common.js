module.exports = {
    // Tell webpack to run babel through every file it goes through
    module: {
        rules: [
            {
                test: /.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "react",
                        "stage-0",
                        ["env", { targets: { browsers: ["last 2 versions"] }}]
                    ]
                }
            }
        ]
    }
};

// "dev:server": "nodemon --watch build --exec \"node build/bundle.js\" ",
