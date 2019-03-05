const mongoose = require('mongoose');

const Todos = mongoose.model('Todos' , {
    email : {
        type : String,
        minlength : 1,
        trim : true,
        required : true
    } , 
    name : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    }
});

module.exports = {Todos};