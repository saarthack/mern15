document.querySelectorAll('.images img').forEach(function (elem) {
    elem.addEventListener('click', function () {
        var src = elem.getAttribute('src');
        var img = document.createElement('img')
        img.setAttribute('src', src)
        img.style.left = Math.random()*90+'%'
        img.style.top = Math.random()*80+'%'
        img.style.rotate = Math.random()*360+'deg'
        document.querySelector('.playground').appendChild(img)
    })
})