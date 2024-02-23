console.log("hola NodeJS");

// Importamos los módulos
//const express = require ('express'); //este es el metodo antiguo Require
import express from 'express'; //este es el metodo actual
import ejs from 'ejs'; // No sería necesario pero no esta de más ponerlo
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';    
import indexRouter from './routes/index.js'
import {PORT} from './config.js'

// Iniciamos express
const app = express();

app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, 'views'));

// Configurar motor de plantillas
app.set('view engine', 'ejs');
app.set('views', join(__dirname,'views'));

// Configurar el enrutador
app.use(indexRouter);

// Configurar public como estatica
app.use(express.static(join(__dirname, 'public')));

// Iniciamos el servidor
app.listen(PORT);
console.log('Escuchando en el puerto ' + PORT);


