const navbarAnimation = document.getElementById("navLinks");
const divElem = document.querySelector("#navLinks");
const htmlElem = document.querySelector(":root");



// Function runs when button is pressed
function mobileMenu() {

  // The menu is open, so close it
  if (divElem.classList[0] === "menu-in") {
    divElem.classList.remove("menu-in");
    divElem.classList.add("menu-out");



    // or the menu is closed so open it
  } else {
    divElem.classList.remove("menu-out");
    divElem.classList.add("menu-in");
  }
}