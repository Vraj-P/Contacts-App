const express = require("express");
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const app = express();

const router = express.Router();
const ConatactModel = mongoose.model("Contacts");

router.get("/add", (req, res)=>{
    res.render("add_contact");
})

router.post("/add", (req, res)=>{

    console.log(req.body);
    
    var contact = new ConatactModel();
    contact.Name = req.body.Name;
    contact.Email = req.body.Email;
    contact.Phone = req.body.Phone;

    contact.save((err, doc)=>{
       
        if(!err){
            res.redirect("/contacts/list");
        }else{
            res.send("A Error Occured");
        }
        
    });

});

router.get("/list", (req, res)=>{
   
    ConatactModel.find((err, docs)=>{

        if(!err){
            console.log(docs);
            res.render("list_contacts", { data : docs });
        }else{
            res.send("Connot Find List");
        }

    });

});

// app.post('/contacts/delete:id', function(req, res, next){
//     var userId = req.body.Name || req.query.Name;

//     ContactsSchema.remove({_id: userId}, function(err, res) {
//        if (!err) { 
//             res.redirect("/contacts/list");
//         } else {
//             res.send("Could not Delete");
//         }
//    });
// })

router.get("/contacts/delete/:id", function(req, res){
   
    var id = req.params.id;

    ConatactModel.findByIdAndRemove({_id: id}, function(err){
        
        if(!err){
            res.redirect("/contacts/list");
        }else{
            res.send("A Error Occured");
        }

    });

});

module.exports = router;