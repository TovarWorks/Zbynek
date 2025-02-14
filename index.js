const images = [
    { src: "img/ff.jpg", name: "Fakin Fakit" },
    { src: "img/kino.jpg", name: "Kino Linka" },
    { src: "img/sr.jpg", name: "Slovácký Rock" },
];

let index = 0;

function changeBackground() {
    
    document.body.style.backgroundImage = `url(${images[index].src})`;
    document.getElementById("image-name").textContent = images[index].name;
    index = (index + 1) % images.length;
}

// Ensure image changes every 5 seconds
setInterval(changeBackground, 5000);

// Set the initial background after the page loads
window.onload = changeBackground;
