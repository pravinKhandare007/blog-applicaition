window.onscroll = function () {
    myFunction();
}


let bottomNavbar = document.getElementById("bottom-navbar-container");
let bottomNavbarTopPosition = bottomNavbar.offsetTop;
let contentContainer = document.getElementById("content-container");

// couraseal 
let courasel1 = document.getElementById("courasel-1");
let courasel2 = document.getElementById("courasel-2");
let courasel3 = document.getElementById("courasel-3");



function myFunction() {
    console.log("scrolling")
    if (window.pageYOffset >= bottomNavbarTopPosition) {
        contentContainer.classList.add("content");
        bottomNavbar.classList.add("sticky");
    }
    else {
        bottomNavbar.classList.remove("sticky");
        contentContainer.classList.remove("content");
    }
};


let sliderContainer = document.getElementById("slider-container");

sliderContainer.addEventListener("mousemove",function(event) {
    var x = event.clientX - sliderContainer.offsetLeft;
    let fore = document.getElementById("fore");
    fore.style.width = `${x}px`;
});

// sliderContainer.addEventListener("click",function(event) {
//     var x = event.clientX - sliderContainer.offsetLeft;
//     let fore = document.getElementById("fore");
//     fore.style.width = `${x}px`;

//     slider.style.left = `${x}px`;
// });
