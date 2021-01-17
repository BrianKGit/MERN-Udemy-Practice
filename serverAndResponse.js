const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// middleware function that triggers on POST requests only
app.post('/user',(req, res, next) => {
    return res.send('<h1>User: ' + req.body.username + '</h1>');
});

// function that triggers on GET requests only
app.get('/',(req, res, next) => {
    res.send('<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>')
});

app.listen(5000);