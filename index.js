const {readFileSync} = require('fs');
const {app, BrowserWindow} = require('electron');
const path = require('path');

function createMainWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
		title: app.getName(),
		show: false,
		x: 0,
		y: 0,
		width: 1600,
		height: 900,
		icon: null,
		minWidth: 800,
		minHeight: 600,
		alwaysOnTop: false,
		titleBarStyle: 'hiddenInset',
		autoHideMenuBar: true,
		darkTheme: false, // GTK+3
		webPreferences: {
			preload: path.join(__dirname, 'browser.js'),
			nodeIntegration: false,
			contextIsolation: true,
			plugins: true
		}
	});

  win.loadURL('https://www.icloud.com/');

  return win;
}

(async () => {
  await app.whenReady();

  mainWindow = createMainWindow();

  const {webContents} = mainWindow;

  webContents.on('dom-ready', () => {
    webContents.insertCSS(readFileSync(path.join(__dirname, 'css', 'dark-mode.css'), 'utf8'));
    // webContents.openDevTools();
    mainWindow.show();
  });
})();
