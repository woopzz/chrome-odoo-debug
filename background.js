function updateParam(key, value) {
    var query = {active: true, currentWindow: true};
    chrome.tabs.query(query, function (tabs) {
        if (!tabs.length) return;

        var tab = tabs[0];
        var url = new URL(tab.url);

        if (value === undefined) {
            url.searchParams.delete(key);
        } else {
            url.searchParams.set(key, value);
        }

        chrome.tabs.update(tab.id, {url: url.href});
    });
}

chrome.commands.onCommand.addListener(function(command) {
    switch (command) {
        case 'debug':
            updateParam('debug', '1');
            break;
        case 'debug-assets':
            updateParam('debug', 'assets');
            break;
        case 'no-debug':
            updateParam('debug');
            break;
    }
});
