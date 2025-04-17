const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


const usuarioRoutes = require('./routes/usuarioRouter');
const conjuntoRoutes = require('./routes/conjuntoRouter');
const tarefaRoutes = require('./routes/tarefaRouter');

app.use(bodyParser.json());
app.use(cors());

app.use('/usuarios', usuarioRoutes);
app.use('/conjuntos', conjuntoRoutes);
app.use('/conjunto/tarefas', tarefaRoutes);


module.exports = app;