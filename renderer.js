// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const exitbtn = document.getElementById("exit");
const maxbtn = document.getElementById("max");
const minbtn = document.getElementById("min");
const bar = document.getElementById("titleBar");

// navigator.platform is deprecated but the rest are not
function isMac() {
  return navigator.userAgentData && navigator.userAgentData.platform ? navigator.userAgentData.platform === "macOS" : /Mac|iP/.test(navigator.platform);
}

if (isMac() === true) {
  // bar.style.justifyContent = "flex-start";
  bar.style.flexDirection = "row-reverse";
  bar.style.marginRight = "0";
  bar.style.marginLeft = "10px";
  exitbtn.style.marginRight = "0px";
}

exitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.close();
});

maxbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const win = window.electronAPI;
  win.maximize();
  //   win.isMaximized() ? win.unmaximize() : win.maximize();
});

minbtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.electronAPI.minimize();
});
