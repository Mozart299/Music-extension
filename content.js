console.log('Content script loaded');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'playPause') {
      const playButton = document.querySelector('.play-pause-button'); // Update this selector based on the site
      if (playButton) playButton.click();
    } else if (request.action === 'nextTrack') {
      const nextButton = document.querySelector('.next-track-button');
      if (nextButton) nextButton.click();
    } else if (request.action === 'prevTrack') {
      const prevButton = document.querySelector('.prev-track-button');
      if (prevButton) prevButton.click();
    }
  });
  