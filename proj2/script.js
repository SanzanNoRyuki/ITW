/* Variables */
var navigation = document.getElementById("navigation");
var navigationOffset = navigation.offsetTop;

/* Sticky navigation */
window.onscroll = function() {
  stickyNavigationCheck();
};

function stickyNavigationCheck() {
  if (window.pageYOffset >= navigationOffset) {
    navigation.classList.add("sticky");
  }
  else {
    navigation.classList.remove("sticky");
  }
}

/* Hamburger menu */
function hamburgerMenuCheck() {
  if (window.innerWidth <= 1000) {
    document.getElementById("hamburgerMenu").classList.toggle("openMenu");
  }
}

/* Smooth scrolling */
function smoothScrolling(elementId) {
  let element = document.getElementById(elementId);
  let headerOffset = 58;

  /* Navigation is not sticky */
  if (window.pageYOffset < navigationOffset) headerOffset = 116;

  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition - headerOffset;

  window.scrollBy({
    top: offsetPosition,
    left: 0,
    behavior: "smooth"
  });
}
