const TOKEN = 'token'
App({
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const token = wx.getStorageSync(TOKEN)//取出token值
    if(token && token !== 0){//判断token是否存在，进一步验证token是否过期
      this.check_token(token)  //token是否过期 
    } else {
      this.login() //登录操作
    }
  },
  login(){
    console.log('进行登录')
    wx.login({ //首先登录进行获取code
      success: (res) => { //获取code
        const code = res.code; //保存code
        wx.request({ //将code发送至服务器
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {//成功，查看data中的token值
            const token = res.data.token; //保存token值
            this.globalData.token = token //将token值保存值全局方便其他地方使用
            wx.setStorageSync(TOKEN, token)//将token值保存值微信异步缓存中
          }
        })
      }
    })
  },
  check_token(token){
    console.log('验证token')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{//查看服务器返回data中是否有 err值
        if(!res.data.errCode){//返回若无err值就代表token有效
          this.globalData.token = token // 将有效token值存入本地
        } else { //返回若有err值就重新登录
          this.login() //登录操作
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  }
})
