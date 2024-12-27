chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "createAlarm") {
      chrome.alarms.create("motivationalPopup", {
        periodInMinutes: 5
      });
    }
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "motivationalPopup") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, {action: "showPopup"});
        }
      });
    }
  });