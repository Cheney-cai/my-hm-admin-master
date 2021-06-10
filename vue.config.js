//cheney_cai
//webpack 配置，打包空白页 去除 hash 版本号 配置别名等问题处理
module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        // @默认为src，系统已配置
        components: '@/components',
        content: 'components/content',
        common: '@/common',
        assets: '@/assets',
        network: '@/network',
        views: '@/views',
        // router和store不需要配置别名，因为在app.vue中引入全局的，可以通过this.$router拿到这个对象
      },
    },
  },
  //去掉打包自动生成的js、css文件hash版本号 参考链接：https://juejin.cn/post/6886698055685373965
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 清除css，js版本号
      config.output.filename('./js/[name].js').end()
      config.output.chunkFilename('./js/[name].js').end()
      // 为生产环境修改配置...
      config.plugin('extract-css').tap((args) => [
        {
          filename: `./css/[name].css`,
          chunkFilename: `./css/[name].css`,
        },
      ])
    }
  },
}
