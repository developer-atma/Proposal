function moveRandom(elm) {
    elm.style.position = "abslute";
    elm.style.top = Math.floor(Math.random() *90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() *90 + 5) + "%";
}

let moverandom = document.getElementById("move-random");

moverandom.addEventListener('mouseover', function(e) {
    moveRandom(e.target);
});