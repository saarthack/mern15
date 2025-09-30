var arr = [
    {
        username: 'Sarthak',
        image: 'https://images.unsplash.com/photo-1758751945250-b1bb1d6caeee?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        age: 30,
        city: 'Bhopal',
        desc: 'Hello, I am full Stack Developer.'
    },
    {
        username: 'Devank',
        age: 20,
        image: 'https://plus.unsplash.com/premium_photo-1755582216148-e1841fe30f26?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        city: 'New York',
        desc: 'Hello, I am Devank Don👋.'
    },
    {
        username: 'Vaibhav',
        age: 24,
        image: 'https://images.unsplash.com/photo-1758846182803-6b3f056ec028?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        city: 'New Delhi',
        desc: 'Hello, I am Vaibhav from Seoni.'
    },
    {
        username:'Anurag',
        image:'https://images.unsplash.com/photo-1755104572227-904d7a0758fb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        age:22,
        city:'Banglore',
        desc:'I am code blooded developer'
    }
]

var sum = ''

arr.forEach(function (elem) {
    sum = sum + `<div class="card">
      <img src="${elem.image}" alt="">
      <h1>${elem.username}, ${elem.age}</h1>
      <h3>${elem.city}</h3>
      <p>${elem.desc}</p>
    </div>`
})


var main = document.querySelector('#main')

main.innerHTML = sum