/* eslint-disable no-empty */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
//! electron squirell startup is only needed for windows

// Modules to control application life and create native browser window
const { app, ipcMain, BrowserWindow, desktopCapturer, dialog, Menu } = require("electron");

//! repalce remote.Something with dialog.Something or Menu.something

// const focus = BrowserWindow.getFocusedWindow();
const path = require("path");

try {
  require("electron-reloader")(module);
} catch (_) {}

function handleMin() {
  BrowserWindow.getFocusedWindow().minimize();
}

// function handleMax() {
//   const focus = BrowserWindow.getFocusedWindow();

//   if (process.platform !== "darwin") {
//     focus.isMaximized() ? focus.unmaximize() : focus.maximize();
//   } else {
//     focus.isFullScreen() ? focus.setFullScreen(false) : focus.setFullScreen(true);
//   }
// }

// app.commandLine.appendSwitch('webrtc-max-cpu-consumption-percentage', '100');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,
    maximize: false,
    titleBarStyle: "hidden",
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  //  remove traffic light icons on Darwin
  if (process.platform === "darwin") {
    mainWindow.setWindowButtonVisibility(false);
  }
  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  function getSource() {
    desktopCapturer.getSources({ types: ["window", "screen"] }).then(async (sources) => {
      for (const source of sources) {
        if (source.name.toLowerCase().includes("gedikuniui")) {
          // if (source.name === "Screen 1") {
          mainWindow.webContents.send("SET_SOURCE", source.id);
          return;
        }
        console.log(source.name);
      }
    });
  }
  getSource();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  ipcMain.on("minimize", handleMin);
  // ipcMain.on("maximize", handleMax);
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
