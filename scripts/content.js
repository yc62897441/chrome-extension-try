chrome.runtime.onMessage.addListener(function (request) {
    switch (request.message) {
        case 'rotate':
            document.body.style.transform = 'rotate(180deg)'
            break
        case 'reset':
            document.body.style.transform = 'rotate(0deg)'
            break
        case 'create':
            const newImg = document.createElement('img')
            newImg.classList.add('img')
            newImg.src = 'https://cdn-icons-png.flaticon.com/512/10118/10118930.png'
            newImg.width = '60'
            newImg.heigh = '60'
            newImg.alt = '一張圖片'

            // add the newly created element and its content into the DOM
            // const container = document.querySelector('#containerasasdasdasd')
            // document.body.insertBefore(newImg, container)

            document.body.innerHTML += newImg
            break
        default:
            break
    }
})
