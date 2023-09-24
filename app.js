var express = require('express');
var app = express();

var routes = require('./routes/route.js');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.json({ message: 'home' });
});

// Add a new route for "/hello"
app.get('/hello', (req, res) => {
    res.json({ message: 'helloworld' });
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function (req, res) {
    console.log("Catch the action at http://localhost:" + port);
});
