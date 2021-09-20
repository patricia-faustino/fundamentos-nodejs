//importando express
const express = require('express');

//chamar função do express
const app = express();

/*/app.get("/controle", (request, response) => {
    nossa função
})*/
app.get("/", (request, response) => {
    return response.json({message: "Hello World Ignite!"});
});

//definir porta onde a nossa aplicação estará rodando
//pedindo que o express start a aplicação
//localhost:numero da porta
app.listen(3333);

