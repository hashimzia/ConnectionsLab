let socket = io('/privateSpace');

let roomName = window.prompt("enter a room name - animals only")
console.log("Room: ", roomName);

socket.on("connect", () => {
    console.log("Connection established to socket server")
    let roomData = {
        name: roomName
    }
    socket.emit('roomJoin', roomData);
})


socket.on("serverData", (data) => {
    console.log(data);
    line(data.x, data.y, data.px, data.py);
})

function setup() {
    createCanvas(400, 400);
    background("#7322ef");
    fill("ef3273");
    // noStroke();
}

function mouseDragged() {
    //ellipse(mouseX, mouseY, 10);
    let mouseObj = {
        x: mouseX,
        y: mouseY,
        px: pmouseX,
        py: pmouseY
    }
    socket.emit("mouseData", mouseObj)
}
