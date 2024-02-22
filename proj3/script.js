/* Variables */
var menu = document.getElementById("globalMenu");
var menuOffset = menu.offsetTop;
var hamburgerWindowWidth = getComputedStyle(document.documentElement).getPropertyValue("--HamburgerWindowWidth");
console.log(window.innerWidth <= hamburgerWindowWidth);

/* Smooth scrolling TODO */
function smoothScrolling(elementId) {
  let element = document.getElementById(elementId);
  let headerOffset = 0;

  /* Hamburger menu offset */
  if (window.innerWidth <= hamburgerWindowWidth) {
    headerOffset = $("#globalNavigation").height();
  }

  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition - headerOffset;

  window.scrollBy({
    top: offsetPosition,
    left: 0,
    behavior: "smooth"
  });
}

/* Hamburger menu */
function hamburgerMenuCheck() {
    if (menu.style.display == "none" || menu.style.display == "") {
      menu.style.display = "block";
    }
    else {
      menu.style.display = "none";
    }
}

/* Menu resize update */
window.addEventListener("resize", function () {
  if (window.innerWidth > hamburgerWindowWidth) {
    menu.style.display = "block";
  }
  else {
     menu.style.display = "none";
  }
});
