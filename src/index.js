//importando express
const { response, request } = require('express');
const express = require('express');

//chamar função do express
const app = express();

//para podermos receber o json na aplicação

app.use(express.json());
/*/app.get("/controle", (request, response) => {
    nossa função
})*/

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json(
        ["Curso 1", "Curso 2", "Curso 3"]
    );
});


app.post("/courses", (request, response) => {
    const body =  request.body;
    console.log(body);
    return response.json( ["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
});

app.put("/courses/:id", (request, response) => {
    const {id} = request.params;
    console.log(id);
    return response.json( ["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
});

app.patch("/courses/:id", (request, response) => {
    return response.json( ["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
});

app.delete("/courses/:id", (request, response) => {
    return response.json( ["Curso 6", "Curso 7", "Curso 4"])
});

//definir porta onde a nossa aplicação estará rodando
//pedindo que o express start a aplicação
//localhost:numero da porta
app.listen(3333);

