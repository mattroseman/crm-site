const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
    console.log('CRM Site listening on port 3000');
});
