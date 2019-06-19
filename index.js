// date for copyright
document.getElementById("year").innerHTML = new Date().getFullYear();

// header
window.onscroll = function() {myFunction()};
var header = document.getElementById("nav");
console.log(header)
var sticky = header.offsetTop;
console.log(sticky)
function myFunction() {
  console.log("PageYOffset: ", window.pageYOffset)
  console.log("Sticky: ", sticky);
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
