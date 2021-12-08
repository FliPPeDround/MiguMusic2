const axios = require('axios')
const qs = require('qs')

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
    axios({
      url: 'https://passport.migu.cn/api/qrcWeb/qrcquery',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        isAsync: true,
        sourceid: 220001,
        qrc_sessionid: loginData.qrc_sessionid
      })
    }).then((res) => {
      console.log(res.data)
      if (res.data.status === 4072) {
        clearInterval(timer)
      } else if (res.data.status === 2000) {
        token = res.data.result.token
        console.log('ok')
        axios({
          url: `https://music.migu.cn/v3/user/login?callbackURL=https%3A%2F%2Fmusic.migu.cn%2Fv3&relayState=&token=${res.data.result.token}&qrclogin=1`,
          method: 'get'
        }).then((response) => {
          console.log(response.headers['set-cookie'])
        })
        clearInterval(timer)
      }
    })
  }, 1000)
  return loginData.qrcUrl
}

module.exports = {
  miguLogin
}