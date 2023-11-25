// Debounce function to limit the rate of execution of a function
function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

// 디졸브 효과
function fadeIn(element) {
  element.style.transition = "opacity 0.2s ease";
  element.style.opacity = 1;
}

function fadeOut(element) {
  element.style.transition = "opacity 0.2s ease";
  element.style.opacity = 0;
}

// Function to hide previousM and nextM
function hideNavigation() {
  var previousM = document.querySelector(".previousM");
  var nextM = document.querySelector(".nextM");

  fadeOut(previousM);
  fadeOut(nextM);
}

function showNavigation() {
  var previousM = document.querySelector(".previousM");
  var nextM = document.querySelector(".nextM");

  fadeIn(previousM);
  fadeIn(nextM);

  setTimeout(function () {
    hideNavigation();
    previousM.style.transition = ""; // Remove transition after hiding
    nextM.style.transition = "";
  }, 2000);
}


function isMobile() {
  return window.innerWidth <= 768;
}

if (isMobile()) {
  setTimeout(hideNavigation, 2000);

  document.addEventListener("scroll", debounce(showNavigation, 200));
  document.addEventListener("touchstart", debounce(showNavigation, 200));
  document.addEventListener("click", debounce(showNavigation, 200));
}