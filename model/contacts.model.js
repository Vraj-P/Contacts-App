const mongoose = require("mongoose");

var ContactsSchema = new mongoose.Schema({
    
    Name: {
        type : String,
        required : "Required"
    },

    Email: {
        type : String
    },

    Phone: {
        type : String
    }

});

mongoose.model("Contacts", ContactsSchema);