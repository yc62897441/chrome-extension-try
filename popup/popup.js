const list = [
    { id: 'rotate', title: '旋轉' },
    { id: 'reset', title: '重置' },
    { id: 'create', title: '新增' },
]

// 建立 DOM 元素
list.forEach((element) => {
    // create a new div element
    // and give it some content
    const newDiv = document.createElement('button')
    const newContent = document.createTextNode(`${element.title}`)
    newDiv.appendChild(newContent) //add the text node to the newly created div.
    newDiv.classList.add('button')
    newDiv.id = element.id

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById('container')
    document.body.insertBefore(newDiv, currentDiv)
})

// 建立發送 sendMessage() 事件監聽
document.addEventListener('DOMContentLoaded', function () {
    list.forEach((element) => {
        // 點擊 popup.html 中 id 為 rotate 的 DOM element
        document.getElementById(element.id).addEventListener('click', function () {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                // 傳送訊息到 content.js
                chrome.tabs.sendMessage(tabs[0].id, { message: element.id })
            })
        })
    })
})
