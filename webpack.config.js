const fs = require('fs');
const path = require('path');

// const webpackConfig =
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',  // Path to your entry file (src/index.js)
  mode: 'development',
  output: {
    filename: 'main.js',  // Name of the bundled output file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Apply this rule to .js and .jsx files
        exclude: /node_modules/,  // Don't process files in node_modules
        use: {
          loader: 'babel-loader',  // Use Babel to transpile JS and JSX
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Path to your HTML template
    }),
  ],
  devServer: {
    static: './public',  // Serve files from the dist directory
    port: 3000,
  },
};


// Write the configuration to the webpack.config.js file in the current directory
// fs.writeFileSync(path.join(__dirname, 'webpack.config.js'), webpackConfig);

// console.log('webpack.config.js has been created!');
