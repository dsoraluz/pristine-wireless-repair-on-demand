const express = require('express');
const customersApi = express.Router();

const mongoose = require('mongoose');
const Customer = require('../models/customer-model');

customersApi.get('/customers',(req,res,next)=>{
  Customer.find((err,customersList)=>{
    if (err){
      res.json(err);
      return;
    }
    res.json(customersList);
  });
});


//Route to add a new device
customersApi.post('/customers', (req,res,next)=>{

});
//Route to get device info by id (for edit purposes)
customersApi.get('/customers/:id',(req,res,next)=>{

});
//Route to put device info by if (for edit purposes)
customersApi.put('/customers:id', (req,res,next)=>{

});
//Route to delete device info
customersApi.delete('/customers:id', (req,res,next)=>{

});



module.exports = customersApi;
