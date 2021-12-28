module.exports = {
  transpileDependencies: ['vuetify'],
  pwa: {
    name: 'MetaMorfosi',
    // themeColor: '#EB7B9A',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js'
    }
  }
}
