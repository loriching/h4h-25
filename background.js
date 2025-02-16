chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    chrome.storage.local.set({
        data: request.data,
    })
});

