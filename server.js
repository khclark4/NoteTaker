const express = require('express');
//bodyparser reads a forms input and stores it, and returns a function
const bodyParser = require('body-parser');
const http = require("http");
const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
//Allows me to use bodyParser
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Welcome to your new way of storing notes!"});
});

app.listen(8080, () => {
    console.log("Server listening on http://localhost" + PORT);
});