'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 7070;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/', (req, res) => {
    var body = req.body;
    var result;
    if (body.score < 0 || body.score > 100) {
        result = 'score error'
    } else if (body.score < 80) {
        result = body.name + 'は不合格です'
    } else if (body.score >= 80) {
        result = body.name + 'は合格です'
    }
    res.send({'message': result});
});
app.listen(PORT);
console.log(`listening on *: ${PORT}`);
