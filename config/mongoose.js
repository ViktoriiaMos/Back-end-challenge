const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://User:User@cluster0.wzyzm0j.mongodb.net/?retryWrites=true&w=majority') 
    .then( () => console.log("DB is connected"))
    .catch(err => console.log(err));