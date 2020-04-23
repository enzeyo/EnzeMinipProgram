Page({

  data: {
    inputShowed: false,
    inputVal: "",
    message:'Enze',
    active:false,
    age:18,
    NowTime: new Date().toLocaleString(),
    isShow: true,
    score:70
  },
  onLoad() {
    setInterval(()=>{
      this.setData({
        NowTime: new Date().toLocaleString()
      })
    },1000)
  },  
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive,
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});