Page({
  goEvaluate: function () {
    wx.navigateTo({
      url: '/pages/evaluate/evaluate'
    })
  },
  openLocation: function () {
    wx.openLocation({
      latitude: 34.26667,
      longitude: 108.95000,
      scale: 14
    })
  },
})