const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { Todos } = require('./models/user');

let app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/validation_data' , (err , db) => {
    if(err)
    {
        console.log(err);
    }
    else 
    {
        console.log('database is connected');
    }
});

app.use(bodyParser.json());

app.post('/todos' , (req,res) => {
    let otherTodos = new Todos({
        email : req.body.email,
        name  : req.body.name
    });

    otherTodos.save().then((result) => {
        res.send(result);
    } , (err) => {
        res.send(err);
    });
});

app.listen('3000' , (req ,res) => {
    console.log('server is started...');
});

module.exports = { app };

