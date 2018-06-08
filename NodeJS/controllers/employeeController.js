const express = require('express');
var router = express.Router();

var {Employee} = require('../models/employee');
var ObjectID = require('mongoose').Types.ObjectId;
// => localhost:3000/employee/
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else {console.log('Error in Retriving Employee'+JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    // emp is a Model object
    var emp = new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    });
    emp.save((err,doc)=>{
        if(!err) {res.send(doc);}
        else{console.log('Error in Employee Save'+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){  
        return res.status(400).send(`No record with given id: ${id}`);
    }
    Employee.findById(id,(err,doc)=>{
        if(!err) {res.send(doc);}
        else{console.log('Error in Retriving Employee '+JSON.stringify(err,undefined,2));}
    });
});

router.put('/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){  
        return res.status(400).send(`No record with given id: ${id}`);
    }
    // emp is a normal object.
    var emp = {
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    };
    // new is true then callback return updated records
    Employee.findByIdAndUpdate(id,{$set:emp},{new:true},(err,docs)=>{
        if(!err) {res.send(docs);}
        else{console.log('Error in Employee Update'+JSON.stringify(err,undefined,2));}
    });
}); 

router.delete('/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){  
        return res.status(400).send(`No record with given id: ${id}`);
    }
    Employee.findOneAndRemove(id,(err,doc)=>{
        if(!err) {res.send(doc);}
        else{console.log('Error in Employee Delete'+JSON.stringify(err,undefined,2));}
    });
})
module.exports = router;