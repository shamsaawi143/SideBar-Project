
let openBtn = document.querySelector('.open-btn')
let closeBtn = document.querySelector('.close-btn')
let sideBar = document.querySelector('.side-bar')

openBtn.addEventListener('click',() => {
    sideBar.classList.add('show-side-bar')
})
closeBtn.addEventListener('click',() => {
    sideBar.classList.remove('show-side-bar')
})