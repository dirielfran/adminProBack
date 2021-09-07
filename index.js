const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

const app = express();

//Configuracion de cors
app.use(cors());

//Base de Datos
dbConnection();

app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hello word'
    });
});

app.listen( process.env.PORT , () => {
    console.log('Servidor corriendo en el puerto. '+ process.env.PORT);
})