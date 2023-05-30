window.onscroll = function () {
    myFunction2();
}


let bottomNavbar2 = document.getElementById("bottom-navbar-container");
let bottomTopPosition = bottomNavbar2.offsetTop;

let contentContainer = document.getElementById("content-container");

function myFunction2() {
    console.log("scrolling")
    if (window.pageYOffset >= bottomTopPosition) {
        contentContainer.classList.add("content");
        bottomNavbar2.classList.add("sticky");
    }
    else {
        bottomNavbar2.classList.remove("sticky");
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
