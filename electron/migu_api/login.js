const axios = require('axios')

let loginData = {}
const miguLogin = async () => {
  const result = await axios.post('https://passport.migu.cn/api/qrcWeb/qrcLogin?sourceid=220001',{
    params: {
      isAsync: true,
      sourceid: 220001
    }
  })
  // console.log(result.headers['set-cookie'])
  loginData = result.data.result
  const timer = setInterval(() => {
    axios.post('https://passport.migu.cn/api/qrcWeb/qrcquery', {
      isAsync: true,
      sourceid: 220001,
      qrc_sessionid: loginData.qrc_sessionid
    }).then((res) => {
      // console.log(res.headers['set-cookie'])
      if (res.data.status === 4072) {
        clearInterval(timer)
      } else if (res.data.status === 2000) {
        axios.get('https://muscic.migu.cn/v3/user/login', {
          params: {
            callbackUrl: 'https://muscic.migu.cn/v3',
            relayState: '',
            token: res.data.result.token,
            qrclogin: 1
          }
        }).then((res) => {console.log(res)})
        clearInterval(timer)
      }
    })
  }, 1000)
  return loginData.qrcUrl
}
miguLogin()
module.exports = {
  miguLogin
}