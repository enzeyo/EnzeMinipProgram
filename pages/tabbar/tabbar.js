// pages/tabbar/tabbar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleClickWx(){
    console.log('handleClickWx')
    const url = "/pages/home/home";//得到页面url 
    wx.navigateTo({
      url: url,
    })
  },
  handleClickMailist(){
    console.log('handleClickMailist')
    const url = "/pages/home/home";
    wx.navigateTo({
      url: url,
    })
  },
  handleClickFind() {
    console.log('handleClickFind')
  },
  handleClickMe(){
    console.log('handleClickMe')
  }

  
})