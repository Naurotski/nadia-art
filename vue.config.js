module.exports = {
  transpileDependencies: ['vuetify'],
  pwa: {
    name: 'MetaMorfosi',
    themeColor: '#FF9800',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js'
    }
  }
}
