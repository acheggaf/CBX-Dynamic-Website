'use strict'

/* eslint-env node, es6 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
/*
const privateKey = fs.readFileSync('/etc/letsencrypt/live/cbxsound.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/cbxsound.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/cbxsound.com/chain.pem', 'utf8');
const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
*/
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
});

app.get('/Aries', (req, res) => {
    res.sendFile(__dirname + '/Aries/Aries.html');
});

app.get('/Halftime', (req, res) => {
    res.sendFile(__dirname + '/Halftime.html');
});

app.get('/Products', (req, res) => {
    res.sendFile(__dirname + '/Products.html');
});

app.get('/Contact', (req, res) => {
    res.sendFile(__dirname + '/Contact.html');
});

app.get('/About', (req, res) => {
    res.sendFile(__dirname + '/About.html');
});


/*
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
*/

app.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

app.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});