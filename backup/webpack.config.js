const path = require('path');
// path.join(__dirname, 'public')
module.exports={
    entry:'./src/app.js',
    mode: 'development',
    output:{
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', "@babel/preset-react"],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
              }
            }
          }
        ]
    }
};