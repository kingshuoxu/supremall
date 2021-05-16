import axios from 'axios'

export function request(config) {
  // // 1.创建axios的实例
  // const instance = axios.create({
  //   url: 'http://152.136.185.210:7878/api/m5',
  //   timeout: 5000
  // })

  // instance(config.baseConfig).then(res => {
  //   config.success(res)
  // }).catch(err => {
  //   config.failure(err)
  // })

  // 最终方案
//   return new Promise((resolve,reject) => {
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })
//   instance(config)
//   .then(res => {
//     resolve(res)
//   })
//   .catch(err => {
//     reject(err)
//   })
//   })
// }

// 最最终方案
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 10000
  })

  // axios拦截器
  instance.interceptors.request.use(config => {
    // console.log(config)
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.每次发送网络请求时，在界面中显示请求的图标

    // 3.某些网络请求（比如登录（token）），必须携带一些特殊信息
    // 拦截了得返回出去
    return config
  },err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    // console.log(res)
    // 只返回了data
    return res.data
  },err => {
    console.log(err)
  })

  // 发送网络请求
  return instance(config)


}

