module.exports = {
    mode: 'development',
    output: {
      filename: 'main.js'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.css$/, 
          use:[       
            {
              loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: false
              }
            }
          ]
        }
      ]
    }
  };
  