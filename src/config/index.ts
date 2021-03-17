// 根据环境引入不同配置 process.env.NODE_ENV
export default require('./env.' + process.env.VUE_APP_ENV)
// console.log(config)
// module.exports = config
