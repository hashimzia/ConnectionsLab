const e = require('express');
const express = require('express');
const app = express();

let Datastore = require('nedb');
let db = new Datastore({ filename: 'chats.db', timestampData: true });
db.loadDatabase();
app.use(express.json())

app.use('/', express.static('public'))


let msgs = [];

app.post('/messages', (req, res) => {
    db.insert(req.body, (err, newDoc) => {
        if (err) {
            res.send({ 'task': 'failed' });
        }
        else {
            res.send({ 'latestMsg': req.body });
        }
    })
    console.log(msgs);
})

app.get('/messages', (req, res) => {
    db.find({}).sort({ "createdAt": 1 }).exec((err, docs) => {
        if (err) {
            res.json({ task: "task failed" })
        } else {
            let obj = { msgs: docs };
            res.json(obj);
        }
    })
})

app.listen(3000, () => {
    console.log("listening on 3000...");
})