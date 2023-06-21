window.onscroll = function () {
    myFunction();
}

var dropdownArrows = document.getElementsByClassName('dropdown-arrow');

for (var i = 0; i < dropdownArrows.length; i++) {
  dropdownArrows[i].addEventListener('click', function(event) {
    console.log("clicked");
    event.preventDefault();
    var dropdownMenu = this.parentNode.nextElementSibling;
    console.log(dropdownMenu);
    dropdownMenu.classList.toggle('show');
  });
}

let bottomNavbar = document.getElementById("bottom-navbar-container");
let bottomNavbarTopPosition = bottomNavbar.offsetTop;
let contentContainer = document.getElementById("content-container");

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


let sliderContainer = document.getElementById("container");

sliderContainer.addEventListener("mousemove",function(event) {
    console.log("mouse over");
    var x = event.clientX - sliderContainer.offsetLeft;
    let fore = document.getElementById("foreground-img");
    fore.style.width = `${x}px`;
});

// sliderContainer.addEventListener("click",function(event) {
//     var x = event.clientX - sliderContainer.offsetLeft;
//     let fore = document.getElementById("fore");
//     fore.style.width = `${x}px`;

//     slider.style.left = `${x}px`;
// });
