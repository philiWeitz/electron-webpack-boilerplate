const { app, BrowserWindow } = require('electron');
const isDevEnvironment = process.argv[2] === 'dev';

function loadDev(win) {
    console.log("Servicing from dev server port 9000");

    // for webpack dev server
    win.loadURL('http://localhost:9000').catch(() => {
        setTimeout(() => loadDev(win), 1000);
    });
}

function loadBuild(win, isNextRefreshReload) {
    console.log("Servicing from bundle");

    // for compiled version
    win.loadFile(__dirname + '/dist/index.html');

    // work around for not being able to refresh from the dev tools
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

    if (isDevEnvironment) {
        loadDev(win)
    } else {
        loadBuild(win, isNextRefreshReload)
    }
}

app.on('ready', createWindow);
