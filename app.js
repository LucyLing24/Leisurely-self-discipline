// app.js
const themeListeners = []
global.isDemo = true
App({
  globalData: {
    theme: wx.getSystemInfoSync().theme,
    hasLogin: false,
    openid: null,
    iconTabbar: '/page/weui/example/images/icon_tabbar.png',
  }
})
