const express = require('express');
const app = express();

let date = new Date();

let messageOfTheDay = require('./messageOfTheDay');

app.get('/', (req, res) => {
    let day = date.getDate();
    let setMessageOfTheDay = messageOfTheDay.returnMessageOfTheDay(day);

    res.json({message: setMessageOfTheDay})
})

app.listen(8080, () =>{
    console.log(`Servidor Node iniciado na porta 8080 em; ${date}.`)
})