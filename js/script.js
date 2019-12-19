const navBar = document.querySelector(".navbar");
const navBarCon = document.querySelector(".navbar .container");

window.onscroll = (e) => {
    console.log(window.scrollY);
    if (window.scrollY > 50){
        navBar.classList.add("colored");
        navBarCon.classList.add("scrolled");
    } else {
        navBar.classList.remove("colored");
        navBarCon.classList.remove("scrolled");
    }
} 