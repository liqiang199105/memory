//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  data: {
    list: [
      {
        id:1,
        title: '第一章 : 你的记忆,我的记忆',
        image:'/images/book/book1.jpg'
      },
      {
        id: 2,
        title: '第二章 一切是如何开始的',
        image: '/images/book/book2.jpeg'
      }, 
      {
        id: 3,
        title: '第三章 记忆和创造力',
        image: '/images/book/book3.jpeg'
      }
      , {
        id: 4,
        title: '第四章 联想的力量',
        image: '/images/book/book4.jpeg'
      }

    ],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false,
    // mock data
    banner: [
      {
        id: 1,
        title: '多米尼克`奥布莱恩大事记',
        image: '/images/banner/1.jpg'
      },
      {
        id: 2,
        title: '最强大脑的样子',
        image: '/images/banner/2.jpg'
      }
      , {
        id: 3,
        title: '如何提高自己的记忆力',
        image: '/images/banner/3.jpeg'
      }]
  },
  //事件处理函数
  bindViewTap(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id
    })
  },
  loadMore(e) {

  },
  getNextDate() {
    const now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
  },
  onLoad() {

  }
})
