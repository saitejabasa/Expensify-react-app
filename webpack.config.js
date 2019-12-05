const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env ==='production';
  const CSSExtract = new MiniCssExtractPlugin();
  // console.log("CSSExtract", CSSExtract);
  return {
    entry: './src/app.js',
    mode: isProduction ? isProduction : 'development',
    output: {
      path: path.join(__dirname, 'public'),    
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },{
        test: /\.s?css$/,
        // use:CSSExtract.extract({
          use:[
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: (resourcePath, context) => {
                  // publicPath is the relative path of the resource to the context
                  // e.g. for ./css/admin/main.css the publicPath will be ../../
                  // while for ./css/main.css the publicPath will be ../
                  return path.relative(path.dirname(resourcePath), context) + '/';
                },
            },
          },
            {
              loader:"css-loader",
              options:{
                sourceMap:true
              }
            },
            {
              loader:"sass-loader",
              options:{
                sourceMap:true
              }
            },
            
          ]
        // })
      }]
    },
    plugins:[
      CSSExtract
    ],
    devtool: isProduction? "source-map":'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback:true
    }
  };
};

