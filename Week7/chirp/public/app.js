let chat_form = document.getElementById('chat-form');
setInterval(() => {
    refreshMsgs();
}, 2000)
chat_form.addEventListener('submit', (event) => {
    event.preventDefault();
    let chatName = document.getElementById("chat-name").value;
    let chatMsg = document.getElementById("chat-msg").value;
    console.log(chatName, chatMsg);
    msgObj = {
        "name": chatName,
        "msg": chatMsg
    }
    let msgObjJSON = JSON.stringify(msgObj);
    console.log(msgObjJSON);

    fetch('/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: msgObjJSON
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            fetch('/messages')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    refreshMsgs();
                })
        })
})

function refreshMsgs() {
    fetch('/messages')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}