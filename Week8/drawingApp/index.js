const express = require('express');
const app = express();

let http = require('http');
let server = http.createServer(app);
app.use('/', express.static('public'))
server.listen(5000, () => {
    console.log('listening on 5000')
})

let io = require('socket.io');
io = new io.Server(server);

io.sockets.on('connect', (socket) => {
    console.log('New Connection:', socket.id);

    socket.on("mouseData", data => {
        console.log(data)
        io.sockets.emit("serverData", data);
    })

    socket.on("disconnect", () => {
        console.log("Socket disconnected", socket.id);
    })

})
