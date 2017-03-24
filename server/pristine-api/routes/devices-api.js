const express = require('express');
const devicesApi = express.Router();

const mongoose = require('mongoose');
const Device = require('../models/device-model');

devicesApi.get('/devices',(req,res,next)=>{
  Device.find((err,deviceList)=>{
    if (err){
      res.json(err);
      return;
    }
    res.json(deviceList);
  });
});


//Route to add a new device
devicesApi.post('/devices', (req,res,next)=>{


  const theDevice = {
    brand: req.body.brand,
    device: req.body.device,
    model: req.body.model,
    colors: req.body.color,
    repair:[
      {"screen": 279},
      {"battery": 69},
      {"dead": 69},
      {"diaognostic": 69},
      {"other": 69}
    ],
    modelNumbers: ["A1661", "A1784", "A1785"]
  };

  theDevice.save((err)=>{
    if(err){
      res.json(err);
      return;
    }
    res.json({
      message: 'new device added!',
      id: theDevice._id
    });
  });
});

//Route to get device info by id (for edit purposes)
devicesApi.get('/devices/:id',(req,res,next)=>{

});

//Route to put device info by if (for edit purposes)
devicesApi.put('/devices:id', (req,res,next)=>{

});

//Route to delete device info
devicesApi.delete('/devices:id', (req,res,next)=>{

});



module.exports = devicesApi;
