const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")
const resNav = document.getElementById("resNav")

openNav.addEventListener('click', () => {
    resNav.style.width = "100%"
})
closeNav.addEventListener('click', () => {
    resNav.style.width = "0%"
})