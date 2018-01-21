
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  data: {
    knowledges: [],
    banner: [],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false
  },
  onShow: function () {
    console.log('onShow1用户信息:%O', app.globalData);
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        avatar: userInfo.avatarUrl,
        nick: userInfo.nickName,
        language: userInfo.language,
        country: userInfo.country,
        province: userInfo.province,
        gender: userInfo.gender //性别 0：未知、1：男、2：女

      })
    })
  },
})
