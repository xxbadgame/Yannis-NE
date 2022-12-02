var map = L.map('map').setView([45.764043, 4.835659], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([45.764043, 4.835659]).addTo(map);


var modal = document.getElementById("myModal");
var body = document.body
var btnModal = document.getElementById("btnModal");
var span = document.getElementsByClassName("close")[0];

btnModal.onclick = function(){
    modal.style.display = "block";
    body.style.overflowY = "hidden"
}

span.onclick = function(){
    modal.style.display = "none";
    body.style.overflowY = "visible"
}

window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none";
        body.style.overflowY = "visible"
    }
}