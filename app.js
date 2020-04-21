App({
  //生命周期函数  会在后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //获取用户信息（异步）
    // wx.getUserInfo({  
    //  先获取用户信息在进行回调的
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    console.log('小程序初始化完成：onlaunch')
    setTimeout(function(){
      const err = new Error
      throw err
    },3000)

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //console.log('界面显示出来：onshow')
    console.log(options)
    switch (options.scene){
      case  1011:
        break;
      case  1025:
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被关闭是：onhide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序发生错误时：onerror')
  },
  //定义全局变量
  globaData:{
    name:'ciogg',
    age:18
  }
})
