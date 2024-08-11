
const express = require('express');
const path = require('path');
const http = require('http');

const PORT = 5000;

const app = express();

app.use(express.static(__dirname));

const routes = [
    { path: '/', file: 'index.html' },
    { path: '/TapeEmulation', file: 'TapeEmulation.html' },
    { path: '/Aries', file: 'Aries/Aries.html' },
    { path: '/Halftime', file: 'Halftime.html' },
    { path: '/Products', file: 'Products.html' },
    { path: '/Contact', file: 'Contact.html' },
    { path: '/About', file: 'About.html' }
];

routes.forEach(route => {
    app.get(route.path, (req, res) => {
        res.sendFile(path.join(__dirname, route.file));
    });
});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`HTTP Server running on port ${PORT}`);
});