const navBar = document.querySelector(".nav-links")
const navItems = document.querySelectorAll(".nav-links a")

const hamburgerOpen = document.querySelector(".hamburger-open")
const hamburgerClose = document.querySelector(".hamburger-close")

hamburgerOpen.addEventListener("click", () => {
    hamburgerOpen.classList.toggle("icon-hidden")
    hamburgerClose.classList.toggle("icon-hidden")
    navBar.style.display = "flex";
    navItems.forEach(item => { 
        item.style.opacity = "1"})
})

hamburgerClose.addEventListener("click", () => {
    hamburgerOpen.classList.toggle("icon-hidden")
    hamburgerClose.classList.toggle("icon-hidden")
    navBar.style.display = "none";
})