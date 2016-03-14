//background.js
//csci 3308 project - party time for those offline
//https://robots.thoughtbot.com/how-to-make-a-chrome-extension

//called when the user clicks on the browser action (icon in chrome browser)
chrome.broswerAction.onClicked.addListener(function(tab) {
  /*send a message to the active tab*/
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_broswer_action"});
  });
  //chrome.tabs.create({"url": "https://google.com"});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "open_new_tab") {
      chrome.tabs.create({"url": request.url});
    }
  }
);
