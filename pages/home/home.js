// pages/home/home.js
import request from '../../service/network.js'
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
   // 1. 原生发送网络请求 
   this.get_data_origin()
   // 2. 使用封装的request发送网络请求
   //   promise 防止回调地狱
    request({
      url:'http://www.httpbin.org/post',
      method:'post'
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
  },

  get_data_origin(){
    // 发送网络请求
    // 1.发送简单的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',       
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    // 2. get请求并且带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    //  3. post请求并且带参数
    // wx.request({
    //   url: 'http://www.httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'coderEnze',
    //     age: 18
    //   },
    //   //成功返回
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   //错误返回
    //   fail: function (res) {
    //     console.log(res)
    //   }
    // })  
  }

 
})