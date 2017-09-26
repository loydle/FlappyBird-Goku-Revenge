const electron = require('electron')
const {app, BrowserWindow} = electron



app.on('ready', () => {
	var mainWindow = new BrowserWindow({
		width: 540,
		height: 786
	})
	mainWindow.loadURL(`file://${__dirname}/index.html`)


})







