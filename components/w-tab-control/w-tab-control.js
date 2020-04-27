// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event) {
      // 取出 index 下标
      const index = event.currentTarget.dataset.index
      // 进行修改currentIndex值 
      this.setData({
        currentIndex: index
      })
      //通知页面内部点击
      this.triggerEvent('itemclick',{index,title:this.properties.titles[index]},{})
    }
  }
})
