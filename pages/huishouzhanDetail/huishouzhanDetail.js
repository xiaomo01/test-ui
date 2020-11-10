Page({
  data: {
    selectNum: 4,//已选星级
    noSelectNum: 1//未选星级
  },
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