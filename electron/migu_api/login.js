const axios = require('axios')
const qs = require('qs')

let loginData = {}
let timer
const miguLogin = async () => {
  const result = await axios.post('https://passport.migu.cn/api/qrcWeb/qrcLogin?sourceid=220001',{
    params: {
      isAsync: true,
      sourceid: 220001
    }
  })
  loginData = result.data.result
  timer = setInterval(() => {
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
      if (res.data.status === 4072) {
        clearInterval(timer)
      } else if (res.data.status === 2000) {
        axios({
          url: `https://music.migu.cn/v3/user/login?callbackURL=https%3A%2F%2Fmusic.migu.cn%2Fv3&relayState=&token=${res.data.result.token}&qrclogin=1`,
          method: 'get',
          headers: {
            referer: 'https://passport.migu.cn/',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.53'
          },
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