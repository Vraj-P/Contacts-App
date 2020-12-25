const mongoose = require("mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost;27017/Contacts_db", { useNewUrlParser: true }, (error)=>{

    if(!error){
        console.log("Success :)");
    }else{
        console.log("Cannot Connect to the Database :( ");
    }

});

const Course = require("./contacts.model");