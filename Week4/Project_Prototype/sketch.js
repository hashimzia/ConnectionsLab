function setup() {
    createCanvas(105, 105)
    // frameRate(1);
}
let correct = null;
let fade = 0;
function draw() {
    fill(255, 255)
    strokeWeight(4)
    ellipse(52, 52, 100, 100)
    fill(0)
    if (correct == null) {
        textSize(35)
        text('VS', 30, 65)
    }
    if (correct) {
        fade += 4;
        fill(61, 227, 100, fade);
        ellipse(52, 52, 100, 100)
        line(30, 45, 45, 65);
        line(45, 65, 80, 35);
    }
    if (correct == false) {
        fade += 4;
        fill(255, 73, 73, fade);
        ellipse(52, 52, 100, 100)
        line(30, 30, 75, 75);
        line(75, 30, 30, 75);
    }
}
document.body.addEventListener('click', () => {
    fade = 0;
})
function keyPressed() {
    if (key == "a") {
        correct = true;
    }
    if (key == "b") {
        correct = false;
    }
}