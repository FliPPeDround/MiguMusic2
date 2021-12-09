const axios = require('axios')
const qs = require('qs')
const fs = require('fs')

let loginData = {}
let timer
const miguLogin = async () => {
  const qrRes = await axios.post('https://passport.migu.cn/api/qrcWeb/qrcLogin?sourceid=220001',{
    params: {
      isAsync: true,
      sourceid: 220001
    }
  })
  loginData = qrRes.data.result
  timer = setInterval(async () => {
    const pollingRes = await axios({
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
    })
    if (pollingRes.data.status === 4072) {
      clearInterval(timer)
    } else if (pollingRes.data.status === 2000) {
      clearInterval(timer)
      const cookieRes = await axios({
        url: `https://music.migu.cn/v3/user/login?callbackURL=https%3A%2F%2Fmusic.migu.cn%2Fv3&relayState=&token=${pollingRes.data.result.token}&qrclogin=1`,
        method: 'get',
        headers: {
          referer: 'https://passport.migu.cn/',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.53'
        },
      })
      let cookie
      const cookieArray = await cookieRes.headers['set-cookie']
      cookieArray.forEach((item) => {
        const cookie_str = item.split(';')[0]
        cookie += cookie_str + ';'
      })
      fs.writeFile('./electron/migu_api/cookie.js', `module.exports = {migu_cookie = '${cookie}'}`, (err) => {
        if (err) {
          return console.error(err)
        }
      })
    }
  }, 1000)
  return loginData.qrcUrl
}

const clearTimer = () => {
  clearInterval(timer)
}

module.exports = {
  miguLogin,
  clearTimer
}