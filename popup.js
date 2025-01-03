document.getElementById("start-alerts").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "start" });
  alert("Motivational alerts have started!");
});

document.getElementById("stop-alerts").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "stop" });
  alert("Motivational alerts have been stopped!");
});
