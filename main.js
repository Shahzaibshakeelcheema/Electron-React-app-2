const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");

//
function createmainwindow() {
  //

  // ye Browser Window ka new instance hai
  const mainWindow = new BrowserWindow({
    title: "Electron App 2",
    width: 1000,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  //   mainWindow.webContents.openDevTools();

  const startUrl = url.format({
    // pathname: path.join("http://Localhost:3000"),
    pathname: path.join(__dirname, "./react-electron/build/index.html"),
    protocol: "file",
  });
  //

  //   mainWindow.loadURL(startUrl);
  mainWindow.loadURL("http://Localhost:3000");
}

app.whenReady().then(createmainwindow);

ipcMain.on("submit:todoForm", (events, args) => {
  console.log(args, events);
});
