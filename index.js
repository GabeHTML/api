const express = require('express');
const server = express();
const  pragas = require('./src/data/pragas.json')

server.get('/pragas', (req, res) => {
    return res.json(pragas)
});

server.listen(3000, () => {
    console.log('O Servidor está online')
});