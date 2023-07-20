const { channel } = require("diagnostics_channel");
const { contextBridge, ipcRenderer } = require("electron");
const os = require("os");

contextBridge.exposeInMainWorld("electron", {
  //we can use any name instead electron
  homeDir: () => os.homedir(),
  osVersion: () => os.version(),
  arch: () => os.arch(),
});
debugger;

contextBridge.exposeInMainWorld("ipcRenderer", {
  //we can use any name than ipc renderer
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
});
