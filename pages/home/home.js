// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast(){
    wx.showToast({
      title: '加载中ing',
      duration:1000,
      icon:'loading',
      mask:true,
      success:function(){
        console.log("弹窗成功")
      },
      fail:function(){
        console.log("弹窗失败")
      },
      complete:function(){
        console.log("完成函数的使用")
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      cancelText:'退出',
      cancelColor: '#000fff',
      confirmText:'登录',
      confirmColor:'#eeef00',
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击取消按钮')
        }
        if(res.confirm){
          console.log('用户点击确定按钮')
        }
      },
      fail:function(err){
        console.log(err)
      },
      complete:function(){

      }
    })
  },
  handleshowLoading(){
    wx.showLoading({
      title: 'enze',
      mask:true,
      success:function(){
        console.log('成功')
      },  
      fail:function(){
        console.log('失败')
      },
      complete(){
        console.log('调用结束')
      }
    })
  },
  handleshowActionSheet(){
    wx.showActionSheet({
      itemList: ['Enze','Ciogg'],
      itemColor:'#00ff00',
      success:function(){
        console.log('成功')
      },
      fail:function(){
        console.log('失败')
      },
      complete:function(){
        console.log('调用结束')
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
      return {
        title:'Hello,Enze',
        path:'/pages/about/about',
        imageUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3775316485,2895083432&fm=26&gp=0.jpg'
      }
  }
})