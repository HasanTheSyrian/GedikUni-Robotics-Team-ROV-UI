/* eslint-disable import/no-extraneous-dependencies */
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer } = require("electron");

const { writeFile } = require("fs");

// const content = "Some content!";

// setTimeout(() => {
//   writeFile("Project/Styling/test.txt", content, (err) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log("xd");
//   });
// }, 1000);

// console.log("test");

ipcRenderer.on("SET_SOURCE", async (event, sourceId) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: sourceId,
          minFrameRate: 30,
          maxFrameRate: 60,
          minWidth: 1280,
          maxWidth: 1280,
          minHeight: 720,
          maxHeight: 720,
        },
      },
    });
    handleStream(stream);
  } catch (e) {
    handleError(e);
  }
});

function handleStream(stream) {
  const video = document.getElementById("vid");
  video.srcObject = stream;
  video.onloadedmetadata = (e) => video.play();
}

function handleError(e) {
  console.log(e);
}

contextBridge.exposeInMainWorld("electronAPI", {
  minimize: () => ipcRenderer.send("minimize"),
  // maximize: () => ipcRenderer.send("maximize"),
  getSrc: () => ipcRenderer.send("getSrc"),
  // isMinimized: () => ipcRenderer.send("isMinimized"),
  // unmaximize: () => ipcRenderer.send("unmaximize"),
});

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
