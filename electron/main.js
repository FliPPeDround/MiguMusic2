// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, screen, ipcMain } = require('electron')
const path = require('path')
const { miguLogin } = require('./migu_api/login.js')

const NODE_ENV = process.env.NODE_ENV

let mainWindow

function createWindow () {
  // 计算窗口大小
  const size = screen.getPrimaryDisplay().workAreaSize
  const width = parseInt(size.height * 1.3)
  const height = parseInt(size.height * 0.8)
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    frame: false,
    resizable: false,
    maximizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      title: '主窗口',
      nodeIntegration: true,
      webSecurity: false,
      experimentalFeatures: true,
      enableRemoteModule: true,
      contextIsolation: false,
      webviewTag: true
    }
  })

  // 加载 index.html
  // mainWindow.loadFile('dist/index.html') 将该行改为下面这一行，加载url
  mainWindow.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:3000'
      :`file://${path.join(__dirname, '../dist/index.html')}`
  );

  // 打开开发工具
  if (NODE_ENV === "development") {
    mainWindow.webContents.openDevTools()
  }

}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 登陆接口
ipcMain.on('login', async e => {
  const loginData = await miguLogin()
  e.returnValue = loginData
})

ipcMain.on('close', e =>
  mainWindow.hide()
)

ipcMain.on('minimize', e =>
  mainWindow.minimize()
)

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
