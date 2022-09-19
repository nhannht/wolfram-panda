function saveButtonSetup() {
    document.getElementById('saveApiBtn').addEventListener('click', () => {
        const value = document.getElementById('apiKey').value
        chrome.storage.sync.set({apiKey: value})
        chrome.runtime.sendMessage({apiKey: value})

    })
}

saveButtonSetup();

const restoreRenderOptions = () => {
    chrome.storage.sync.get('apiKey',async (result) => {
        document.getElementById('apiKey').value = await result.apiKey
       /* chrome.storage.sync.set({
            apiKey: result.apiKey
        })*/
    })
}
document.addEventListener('DOMContentLoaded', restoreRenderOptions)


