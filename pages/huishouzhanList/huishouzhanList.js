Page({
  goDetail: function (e) {
    var self = this;
    wx.navigateTo({ url: '/pages/huishouzhanDetail/huishouzhanDetail?id=' + e.currentTarget.dataset.id });
  },
})