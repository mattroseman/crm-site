var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
    entry: [
        APP_DIR + "/index.tsx",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
    ],
    output: {
        publicPath: "http://localhost:8080/",
        filename: "bundle.js",
        path: BUILD_DIR
    },

    // Enable sourcemaps for debugging webpack's output
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.scss$/, exclude: /(node_modules)/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.css$/, exclude: /(node_modules)/, loader: "style-loader!css-loader" },
            { test: /\.tsx?$/, exclude: /(node_modules)/, loader: "react-hot-loader!awesome-typescript-loader" },

            { enforce: "pre", test: /\.jsx?$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

module.exports = config;
