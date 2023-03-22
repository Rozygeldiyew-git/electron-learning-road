const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')




function createMainWindow() {

    const htmlPath = path.join(__dirname, 'windows/main/index.html')
    const preloadScrtiptPath = path.join(__dirname, 'preload/mainPreload.js')
    const iconPath = path.join(process.cwd(), 'assets/icons/r_logo.png')
    const mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: preloadScrtiptPath
        },
        icon: iconPath
    })

    ipcMain.handle('ping', () => 'pong')
    // mainWin.webContents.openDevTools()
    mainWin.loadFile(htmlPath)
}





app.whenReady().then(() => {
    createMainWindow()


    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createMainWindow()
    })
})



app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})