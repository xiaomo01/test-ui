Page({
  goDetail: function (e) {
    var self = this;
    wx.navigateTo({ url: '../huishouzhanDetail/huishouzhanDetail?id=' + e.currentTarget.dataset.id });
  },
})