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
    textSize(35)
    text('VS', 30, 65)
    if (correct == true) {
        fade += 4;
        fill(128, 237, 153, fade);
        ellipse(50, 50, 100, 100)
        line(30, 45, 45, 65);
        line(45, 65, 80, 35);
    }
    print(correct)
}
function keyPressed() {
    if (key == "a") {
        correct = true;
        print("a");
    }
    if (key == "b") {
        correct = false;
    }
}