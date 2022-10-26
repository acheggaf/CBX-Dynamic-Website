'use strict'

/* eslint-env node, es6 */

const express = require('express');
const path = require('path');


const PORT = 443

const app = express()


app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/TapeEmulation', (req, res) => {
    res.sendFile(__dirname + '/TapeEmulation.html');
    console.log("tape")
});

app.get('/Halftime', (req, res) => {
    res.sendFile(__dirname + '/Halftime.html');
    console.log("halftime")
});

app.get('/Products', (req, res) => {
    res.sendFile(__dirname + '/Products.html');
    console.log("Products")
});

app.get('/Contact', (req, res) => {
    res.sendFile(__dirname + '/Contact.html');
    console.log("Contact")
});

app.get('/About', (req, res) => {
    res.sendFile(__dirname + '/About.html');
    console.log("About")
});


app.listen(PORT, () => {
    console.log("Serveur démaré")
})