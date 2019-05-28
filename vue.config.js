const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  // 项目部署的基础路径 默认/
  // 放在子目录时使用./或者加你的域名
  publicPath: process.env.BASE_URL,
  lintOnSave: true, // default false
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    open: false, // 启动服务后是否打开浏览器
    // host: '127.0.0.1',
    port: 8088,
    // https: false,
    // hotOnly: false,
    // // 设置代理，用来解决本地开发跨域问题，如果设置了代理，本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    proxy: 'http://47.110.232.244:56001'
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('util', resolve('src/util'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/global.less')
      ]
    }
  }
}
