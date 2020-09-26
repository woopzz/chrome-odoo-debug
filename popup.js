document.getElementById('debug').addEventListener('click', function () {
    chrome.extension.getBackgroundPage().updateParam('debug', '1');
})

document.getElementById('debug-assets').addEventListener('click', function () {
    chrome.extension.getBackgroundPage().updateParam('debug', 'assets');
})

document.getElementById('no-debug').addEventListener('click', function () {
    chrome.extension.getBackgroundPage().updateParam('debug');
})
