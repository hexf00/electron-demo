module.exports = {
  configureWebpack: {
    // 调试用到
    devtool: 'source-map'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        nsis: {
          // 为true则自动安装，一键安装
          oneClick: false
        }
      },
      // 也是默认目录
      outputDir: 'dist_electron',
      // 启用TS
      disableMainProcessTypescript: false, // Manually disable typescript plugin for main process. Enable if you want to use regular js for the main process (src/background.js by default).
      // 类型检查
      mainProcessTypeChecking: true // Manually enable type checking during webpck bundling for background file.
    }
  }
}
