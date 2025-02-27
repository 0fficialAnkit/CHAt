// const socket = io();

// // Ask for username
// let username = prompt("Enter your name:");
// if (!username) username = "Anonymous";
// socket.emit("join", username);

// // Handle message sending
// document.getElementById("send-btn").addEventListener("click", sendMessage);
// document.getElementById("message-input").addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         sendMessage();
//     }
// });

// function sendMessage() {
//     const input = document.getElementById("message-input");
//     const message = input.value.trim();

//     if (message) {
//         socket.emit("sendMessage", message);
//         input.value = "";
//     }
// }

// // Handle receiving messages
// socket.on("message", (data) => {
//     const chatBox = document.getElementById("chat-box");
//     const messageElement = document.createElement("div");

//     if (data.user === "System") {
//         messageElement.innerHTML = `<strong>${data.text}</strong>`;
//         messageElement.style.color = "gray";
//     } else {
//         messageElement.innerHTML = `<strong>${data.user}:</strong> ${data.text}`;
//     }

//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight;
// });












const socket = io();

// Ask for username
let username = prompt("Enter your name:");
if (!username) username = "Anonymous";
socket.emit("join", username);

// Handle message sending
document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("message-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById("message-input");
    const message = input.value.trim();

    if (message) {
        socket.emit("sendMessage", message);
        input.value = "";
    }
}

// Handle receiving messages
socket.on("message", (data) => {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");

    if (data.user === "System") {
        messageElement.innerHTML = `<strong>${data.text}</strong>`;
        messageElement.style.color = "gray";
    } else {
        messageElement.innerHTML = `<strong>${data.user}:</strong> ${data.text}`;
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});
