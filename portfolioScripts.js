var map = L.map('map').setView([45.764043, 4.835659], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([45.764043, 4.835659]).addTo(map);


window.onscroll = function() {scrollFunction()};

