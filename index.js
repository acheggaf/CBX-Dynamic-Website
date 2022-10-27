'use strict'

/* eslint-env node, es6 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/cbxsound.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/cbxsound.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/cbxsound.com/chain.pem', 'utf8');

const PORT = 443

const app = express()

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

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


const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

app.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});