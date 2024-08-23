// Listen for messages from the popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'playPause') {
      // Play or pause the music on the active tab
      handlePlayPause();
    } else if (request.action === 'nextTrack') {
      // Skip to the next track on the active tab
      handleNextTrack();
    } else if (request.action === 'prevTrack') {
      // Skip to the previous track on the active tab
      handlePrevTrack();
    }
    sendResponse({status: "done"});
  });
  
  // Function to play/pause the music
  function handlePlayPause() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: togglePlayPause
      });
    });
  }
  
  // Function to skip to the next track
  function handleNextTrack() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: skipNextTrack
      });
    });
  }
  
  // Function to skip to the previous track
  function handlePrevTrack() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: skipPrevTrack
      });
    });
  }
  
  // These functions will run in the context of the active tab's page
  function togglePlayPause() {
    const playButton = document.querySelector('.play-button'); // Update this selector for your target site
    if (playButton) {
      playButton.click();
    }
  }
  
  function skipNextTrack() {
    const nextButton = document.querySelector('.next-button'); // Update this selector for your target site
    if (nextButton) {
      nextButton.click();
    }
  }
  
  function skipPrevTrack() {
    const prevButton = document.querySelector('.prev-button'); // Update this selector for your target site
    if (prevButton) {
      prevButton.click();
    }
  }
  
  // Optional: Handle installation events
  chrome.runtime.onInstalled.addListener(() => {
    console.log('Music extension installed');
  });
  
//   // Optional: Handle background alarms (e.g., periodic tasks)
//   chrome.alarms.onAlarm.addListener((alarm) => {
//     console.log('Alarm triggered:', alarm.name);
//     // Perform periodic tasks here
//   });
  