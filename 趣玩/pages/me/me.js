// pages/wode/wode.js
Page({
  data: {
    userInfo:{},
    //新加一个openid变量，保存获取到的openid字段
    openid:""
  },
  onGotUserInfo: function(e){
    //将this对象保存到that中
    const that = this
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        console.log('云函数获取成功', res.result.openid)
        that.setData({
          openid: res.result.openid,
          userInfo: e.detail.userInfo
        })
      
        //需要添加的代码
        //将openid字段加入到userInfo变量中
        this.data.userInfo.openid = this.data.openid
        //打印一下当前userInfo的信息，检查是否有openid字段
        console.log("userInfo", this.data.userInfo)
        //将userinfo信息保存到缓存中
         wx.setStorageSync('ui', this.data.userInfo)
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  onLoad: function (options) {
    const ui = wx.getStorageSync('ui')
    this.setData({
      userInfo: ui,
      openid:ui.openid
    })
  }
})