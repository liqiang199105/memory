// ============================================================================
// home.js
// ============================================================================

var app = getApp()

Page({
  // 数据
  data: {
    memories: [
      {
        id: 'number',
        key: "数字记忆",
avatar:"/images/icon/1.jpeg"
      },
      {
        id: 'car',
        key: "车牌",
        avatar: "/images/icon/6.jpeg"

      },
      {
        id: 'binary',
        key:"二进制", 
        avatar:"/images/icon/2.jpeg"

      },
      {
        id: 3,
        key: "字母",
        avatar: "/images/icon/3.jpeg"

      },
      {
        id: 4,
        key: "单词",
        avatar: "/images/icon/4.jpeg"

      },
      {
        id: 4,
        key: "股票",
        avatar: "/images/icon/5.jpeg"

      },
      {
        id: 5,
        key: "扑克",
        avatar: "/images/icon/6.jpeg"

      },
      {
        id: 6,
        key: "华容道",
        avatar: "/images/icon/6.jpeg"

      }
      
    ]
    ,
    currentNavtab: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
  },

  // 函数
  bindViewTap: function () {  //事件处理函数
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.larkin1991.com/json/list/page' + 1,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        that.setData({
           knowledges: res.data
         })
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },


});
