// components/my-mslot/my-mslot.js
Component({
 //定义组件的配置选项
 //multipleSlots ： 多插槽时需要 ture
 //styleIsolation ： 设置样式的隔离方式
  options:{
    multipleSlots: true

  },
   /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value:''
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 外界给组件传入额外的样式
  extelnalClass:[],
  // 监听properties/data的改变
  observers : {
    counter:function(newVal){
      console.log(newVal)
    }
  },
  //组件中监听生命周期函数
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面现实出来时')
    },
    hide(){
      console.log('监听组件所在页面隐藏起来时')
    },
    resize(){
      console.log('监听页面尺寸改变时')
    }
  },
  lifetimes :{
    created(){
      console.log('组件被创建出来')
    },
    attached(){
      console.log('组件被添加到页面时')
    },
    ready(){
      console.log('组件被渲染出来时')
    },
    moved(){
      console.log('组件被移动到另一个节点时')
    },
    detached(){
      console.log('组件被移除掉时')
    }
  }
})
