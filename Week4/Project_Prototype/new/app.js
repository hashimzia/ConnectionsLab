window.addEventListener('load', () => {
    fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => console.log(data));
})


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

}
function draw() {
    background(0);
    fill(255);
    elipse(800, 800, 25, 25);
}