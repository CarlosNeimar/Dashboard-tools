const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    title: 'Dashboard App',
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // win.webContents.openDevTools();

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);
