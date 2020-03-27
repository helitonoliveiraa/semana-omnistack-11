const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * config para quando a aplicação vai para produção
 * limita qual enreço vai poder acessar a aplicação
 * 
 * app.use(cors({ 
 * origin: 'endereço que vai poder acessar a aplicação'
 * }));
 */