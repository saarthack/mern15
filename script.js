var cursor = document.querySelector('#cursor')
var h1 = document.querySelector('h1')


document.addEventListener('mousemove', function (dets) {
    cursor.style.left = dets.x + 'px'
    cursor.style.top = dets.y + 'px'
})


h1.addEventListener('mouseenter', function () {
    cursor.style.scale = 3
})
h1.addEventListener('mouseleave', function () {
    cursor.style.scale = 1

})