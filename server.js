const express = require('express');
const app = express();
const port = 3000;

const drinks = require("./models/drinks.js")

app.get('/drinks/', (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    });
});

app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id);
});

app.listen(port, () => {
    console.log("listening on port ", port);
})