module.exports = function() {
    return {
      module: {
        rules: [
          {
            test: /\.(ttf|eot|svg|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]'
                     },
                  },
              ],
          },
      };
  };