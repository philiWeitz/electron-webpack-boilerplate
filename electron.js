const { app, BrowserWindow } = require('electron');

function loadDev(win) {
    // for webpack dev server
    win.loadURL('http://localhost:9000');
}

function loadBuild(win, isNextRefreshReload) {
    // for compiled version
    win.loadFile(__dirname + '/dist/index.html');

    // work around for not beeing able to refresh from the dev tools
    win.webContents.on('did-finish-load', () => {
        if (isNextRefreshReload === true) {
            win.loadFile(__dirname + '/dist/index.html');
            isNextRefreshReload = false;

        } else {
            isNextRefreshReload = true;
        }
    });
}

function createWindow () {
    let isNextRefreshReload = false;

    // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    loadDev(win);
    // loadBuild(win, isNextRefreshReload);
}

app.on('ready', createWindow);
