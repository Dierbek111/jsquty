const btn_thmeback = document.querySelector('#btn_thmeback')
const btn_openimg = document.querySelector('#btn_openimg')
const btn_textopen = document.querySelector('#btn_textopen')
const btn_textcolor = document.querySelector('#btn_textcolor')
const body = document.querySelector('body')
const img = document.querySelector('img')
const p = document.querySelector('p')



btn_thmeback.onclick = () => {
    body.classList.toggle('red')
}

btn_openimg.onclick = () => {
    img.classList.toggle('hidden')
}
btn_textopen.onclick = () => {
    p.classList.toggle('hidden')
}
btn_textcolor.onclick = () => {
    p.classList.toggle('green')
}


