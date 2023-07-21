const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

//Database
mongoose.Promise = global.Promise;   //Associação a API de promise
mongoose.connect('mongodb://db//mydb');

//Teste
server.get('/', (req, res, next) => res.send('backend'));

//Start Server
server.listen(3000);