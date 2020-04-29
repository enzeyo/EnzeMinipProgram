// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  onUnload:function(){
    // 获取首页的页面对象
    const pages = getCurrentPages()
    const home = pages[pages.length-2]
    home.setData({
      name:'Hi Ciogg'
    })
  },
  handleBackHome(){
    wx.navigateBack({
      delta:1
    })
  }

})