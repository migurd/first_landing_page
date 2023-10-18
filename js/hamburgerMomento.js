const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

let sw = false;

hamburger.addEventListener('click', () => {
  if(sw === false)
  {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
  else {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
  sw = !sw;
});

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })  
);