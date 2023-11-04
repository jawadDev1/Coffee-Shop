
let searchIcon = document.getElementById("search-icon");
let search = document.getElementById("search-form");
let cartIcon = document.getElementById("cartIcon");
let cartContainer = document.getElementById("cart-container");
let mobileMenu = document.getElementById("mobile-menu");
let menuBtn = document.getElementById("menu-btn");
let hideMenuBtn = document.getElementById("hide-menu");

searchIcon.addEventListener('click', ()=>{
    search.classList.toggle("search-acitve");
    cartContainer.classList.remove("cart-container-active");
    mobileMenu.classList.remove("nav-active");
})

cartIcon.addEventListener('click', ()=>{
    cartContainer.classList.toggle("cart-container-active");
    search.classList.remove("search-acitve");
    mobileMenu.classList.remove("nav-active");
})

menuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle("nav-active");
    search.classList.remove("search-acitve");
    cartContainer.classList.remove("cart-container-active");
})

hideMenuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle("nav-active");
    search.classList.remove("search-acitve");
    cartContainer.classList.remove("cart-container-active");
})


window.onscroll = () =>{
    mobileMenu.classList.remove("nav-active");
    search.classList.remove("search-acitve");
    cartContainer.classList.remove("cart-container-active");
}