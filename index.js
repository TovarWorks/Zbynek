const images = [
    { src: "img/ff.jpg", name: "Fakin Fakit" },
    { src: "img/kino.jpg", name: "Kino Linka" },
    { src: "img/sr.jpg", name: "Slovácký Rock" },
];
let index = 0;

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;


function changeBackground() {
    
    document.body.style.backgroundImage = `url(${images[index].src})`;
    document.getElementById("image-name").textContent = images[index].name;
    index = (index + 1) % images.length;
}

// Ensure image changes every 5 seconds
setInterval(changeBackground, 5000);

// Set the initial background after the page loads
window.onload = changeBackground;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});