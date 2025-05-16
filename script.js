console.log("Cat Script Loaded");
var navbarAnimation = document.getElementById("navLinks");
/* function mobileMenu() {
  
  console.log(navbarAnimation);
  if (navbarAnimation.style.display === "block") {
    console.log("block");
    navbarAnimation.style.display = "none";
  } else {
    console.log("none");
    navbarAnimation.style.display = "block";
  }
}
 */

const divElem = document.querySelector("#navLinks");
const htmlElem = document.querySelector(":root");


function mobileMenu() {
  if (divElem.classList[0] === "menu-in") {
    divElem.classList.remove("menu-in");
    divElem.classList.add("menu-out");
  } else {
    divElem.classList.remove("menu-out");
    divElem.classList.add("menu-in");
  }
}