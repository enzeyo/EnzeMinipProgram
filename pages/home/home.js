// pages/home/home.js
//getApp()获取App()产生的实例对象
const app = getApp();
const name = app.globaData.name;
const age = app.globaData.age;

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    name:name,
    age:age,
    students:[
      { id: 1, name: 'ciogg', age: 18, city: 'QiXian'},
      { id: 2, name: 'cioyo', age: 19, city: 'Jinzhong'},
      { id: 3, name: 'Enze', age: 20, city: 'ShanXi'},
      { id: 4, name: 'Laze', age: 21, city: 'CHina'}
    ],
    counter:0
  },
  handaddBtnClick(){
    this.setData({
      counter: this.data.counter+1
    })
  },
  handcutBtnClick(){
    this.setData({
      counter: this.data.counter-1
    })
  },
  handlegetUserInfo(event){
    console.log(event)
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://123.207.32.32:8080/recommend',
      success:(res) =>{
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list : data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})