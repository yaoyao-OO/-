// index.js
Page({
  // 页面的初始数据
  data: {},

  // 生命周期函数--监听页面加载
  onLoad: function (options) {},

  // 点击fp图片时触发的事件
  onFpTap: function () {
    // 跳转到footprint页面
    wx.navigateTo({
      url: '/pages/index/footprint/footprint'
    });
  },

  onCnpTap: function () {
    // 跳转到footprint页面
    wx.navigateTo({
      url: '/pages/index/createNewPlan/createNewPlan'
    });
  },
});
