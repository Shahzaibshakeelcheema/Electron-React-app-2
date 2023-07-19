const { contextBridge } = require("electron");
const os = require("os");

contextBridge.exposeInMainWorld("electron", {
  homeDir: () => os.homedir(),
  osVersion: () => os.version(),
  arch: () => os.arch(),
});
debugger;

// const { contextBridge } = require("electron");

// contextBridge.exposeInMainWorld("electron", {
//   homeDir: require("electron").os.homedir,
// });
