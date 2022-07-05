// This file is rvequired by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const exitbtn = document.getElementById("exit");
const maxbtn = document.getElementById("max");
const minbtn = document.getElementById("min");
const bar = document.getElementById("titleBar");
const time = document.getElementById("time");

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}

setInterval(() => {
  time.innerHTML = formatAMPM(new Date()); // set time every 1 second
}, 1000);

// navigator.platform is deprecated but the rest are not
function isMac() {
  return navigator.userAgentData && navigator.userAgentData.platform ? navigator.userAgentData.platform === "macOS" : /Mac|iP/.test(navigator.platform);
}

// reverse titlebar icons on mac

if (isMac() === true) {
  bar.style.flexDirection = "row-reverse";
  exitbtn.style.marginRight = "0px";
  exitbtn.style.marginLeft = "10px";
  maxbtn.style.order = "-1";
  maxbtn.style.margin = "0";
  minbtn.style.margin = "0 10px 0 10px";
}

exitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.close();
});

maxbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const win = window.electronAPI;
  win.maximize();
});

minbtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.electronAPI.minimize();
});
