var map = L.map('map').setView([45.764043, 4.835659], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([45.764043, 4.835659]).addTo(map);

const sr = ScrollReveal();
sr.reveal('h1',{
    origin : 'bottom',
    duration : 3000,
    distance : '30px',
    reset : true,
    scale : 0.2
});


sr.reveal('.presentation p',{
    origin : 'bottom',
    duration : 8000,
    distance : '30px',
    reset : true,
    scale : 0.2
});

window.addEventListener("scroll", function(){
    var banner = document.getElementsByClassName('banner');
    banner[0].classList.toggle("sticky", window.scrollY > 80)
})