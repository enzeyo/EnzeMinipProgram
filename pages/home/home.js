// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'Hello Enze'
  },
  handlePushDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail?name=Enze&age=18',
    })
  }
})