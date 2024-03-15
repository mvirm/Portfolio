//requerimientos 
const express = require("express");
const morgan = require("morgan");

//creo el servidor
const server = express();

//midlewares
server.use(express.json());
server.use(morgan("dev"));


module.exports = server;