// ----- 精简写法 -----
export default function request(option) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: option.url,
      method: option.method || 'get',
      data: option.data || {},
      success: resolve,
      fail: reject
    })
  })
}

// ----- 原始写法 ----
// export default function request(options){
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: function (res) {
//         resolve(res)
//       },
//       fail: function (err) {
//         reject(err)
//       }
//     })
//   })
// }

