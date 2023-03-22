const { app, BrowserWindow } = require('electron')
const path = require('path')

function createMainWindow() {
    const mainWin = new BrowserWindow({
        width: 800,
        height: 600
    })

    mainWin.loadFile(path.join(__dirname, 'windows/main/index.html'))
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