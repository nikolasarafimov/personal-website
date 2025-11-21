const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });
}


/*
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



const body = document.querySelector("body"),
    header = document.querySelector("header"),
    modeToggle = document.querySelector(".lightDark-mode");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "light-mode"){
    body.classList.add("light");
}

modeToggle.addEventListener("click" , () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("light");

    if(!body.classList.contains("light")){
        localStorage.setItem("mode" , "dark-mode");
    }else{
        localStorage.setItem("mode" , "light-mode");
    }
});

sidebarOpen.addEventListener("click" , () => {
    header.classList.add("active");
});

body.addEventListener("click" , e => {
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        header.classList.remove("active");
    }
});*/
