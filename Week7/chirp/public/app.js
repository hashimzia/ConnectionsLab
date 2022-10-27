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
            document.getElementById('chat-msgs').innerHTML = "";
            let allChats = data.msgs;
            allChats.forEach((chat) => {
                let chatContainer = document.createElement('li');
                let nameElt = document.createElement('p');
                let msgElt = document.createElement('p');
                msgElt.innerHTML = chat.msg;
                nameElt.innerHTML = chat.name;
                nameElt.classList.add("chat__list-item-name");
                msgElt.classList.add("chat__list-item-msg");

                chatContainer.appendChild(nameElt);
                chatContainer.appendChild(msgElt);
                document.getElementById('chat-msgs').appendChild(chatContainer);
            })
        })

}