// var dropdownArrows = document.getElementsByClassName('dropdown-arrow');

// console.log(dropdownArrows)
// for (var i = 0; i < dropdownArrows.length; i++) {
//     dropdownArrows[i].addEventListener('click', function(event) {
//       // Event handling code goes here
//       console.log("span arrow clicked")
//       event.preventDefault();
//       var dropdownMenu = this.nextElementSibling;
//       console.log(this.nextElementSibling)
//       dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
//     });
//   }
  

var dropdownArrows = document.getElementsByClassName('dropdown-arrow');

for (var i = 0; i < dropdownArrows.length; i++) {
  dropdownArrows[i].addEventListener('click', function(event) {
    event.preventDefault();
    var dropdownMenu = this.parentNode.nextElementSibling;
    dropdownMenu.classList.toggle('show');
  });
}
