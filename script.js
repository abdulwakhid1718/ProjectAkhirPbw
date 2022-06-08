let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountain_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

window.addEventListener('scroll', function () {
    let value = window.scrollY
    stars.style.left = value * 0.3 +'px'
    moon.style.top = value * 0.8 +'px'
    mountain_behind.style.top = value * 0.3 +'px'
    text.style.marginRight = value * 4 +'px'
    text.style.marginTop = value * 1.5 +'px'
    btn.style.marginTop = value * 1.6 +'px'
    header.style.top = value * 0.6 +'px'
})

const toggle = document.querySelector('#togle')
const nav = document.querySelector('header ul')

toggle.addEventListener('click', function () {
    nav.classList.toggle('show')
})


document.addEventListener("mousemove", parallax);
function parallax(e) {
    let bintang = document.querySelector('.bintang')
    const speed = bintang.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX * speed)/100
    const y = (window.innerWidth - e.pageY * speed)/100
    bintang.style.transform = `translateX(${x}px) translateY(${y}px)`
}

var typed = new Typed('.texttyping', {
    strings: ["Wakhid", "Student"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});