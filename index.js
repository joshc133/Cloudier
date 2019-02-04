const {app, BrowserWindow} = require('electron')

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
		title: app.getName(),
		show: true,
		x: 0,
		y: 0,
		width: 1600,
		height: 900,
		icon: null,
		minWidth: 800,
		minHeight: 600,
		alwaysOnTop: false,
		titleBarStyle: 'hiddenInset',
		autoHideMenuBar: false,
		darkTheme: false, // GTK+3
		webPreferences: {
			preload: 'browser.js',
			nodeIntegration: false,
			contextIsolation: true,
			plugins: true
		}
	});

  win.loadURL('https://www.icloud.com/');
}

app.on('ready', createWindow)
