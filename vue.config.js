const { name } = require('./package');

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3333,
    // overlay: {
    //   warnings: false, //不显示警告
    //   errors: false	//不显示错误
    // }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  lintOnSave: false
};