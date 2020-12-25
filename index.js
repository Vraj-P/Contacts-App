const connection =  require("./model/index");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");
const methodOverride = require("method-override");

const ContactsController = require("./controllers/Contacts");

application.use(bodyparser.urlencoded({
    extended : true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expressHandlerbars({    
    extname : "hbs", 
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

application.set("view engine", "hbs");

application.use(methodOverride("_method"));

application.get("/", (req, res)=>{
    res.render("index", {});
});

application.use("/contacts", ContactsController)

application.listen("3000", ()=>{
    console.log("Server Started");
});

