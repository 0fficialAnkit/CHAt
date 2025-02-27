// const express = require("express");
// const http = require("http");
// const { Server } = require("socket.io");
// const cors = require("cors");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: "*",
//         methods: ["GET", "POST"]
//     }
// });

// app.use(cors());
// app.use(express.static("public")); // Serve frontend files from the "public" folder

// io.on("connection", (socket) => {
//     console.log("A user connected:", socket.id);

//     // Broadcast when a user joins
//     socket.on("join", (username) => {
//         socket.username = username;
//         io.emit("message", { user: "System", text: `${username} has joined the chat!` });
//     });

//     // Handle incoming messages
//     socket.on("sendMessage", (message) => {
//         io.emit("message", { user: socket.username, text: message });
//     });

//     // Broadcast when a user disconnects
//     socket.on("disconnect", () => {
//         io.emit("message", { user: "System", text: `${socket.username} has left the chat.` });
//     });
// });

// // Start the server
// const PORT = 8080;  //   from 3000 to 8080
// server.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


// // 1st go to the desired folder using terminal 
// // cd public-chat-app
// // 2nd start the server 
// //  node server.js
// // 3rd  make a new link using this 
// // ngrok http 8080











const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.static("public")); // Serve frontend files from the "public" folder

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Broadcast when a user joins
    socket.on("join", (username) => {
        socket.username = username;
        io.emit("message", { user: "System", text: `${username} has joined the chat!` });
    });

    // Handle incoming messages
    socket.on("sendMessage", (message) => {
        io.emit("message", { user: socket.username, text: message });
    });

    // Broadcast when a user disconnects
    socket.on("disconnect", () => {
        io.emit("message", { user: "System", text: `${socket.username} has left the chat.` });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
