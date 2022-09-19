const addApiBtn = document.getElementById('addApiBtn');
 addApiBtn.addEventListener('click',async  () => {
    chrome.runtime.openOptionsPage()
})
