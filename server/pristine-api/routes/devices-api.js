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


// //Route to add a new device
// pristineApi.post('/devices', (req,res,next)=>{
//
// });
// //Route to get device info by id (for edit purposes)
// pristineApi.get('/devices/:id',(req,res,next)=>{
//
// });
// //Route to put device info by if (for edit purposes)
// pristineApi.put('/devices:id', (req,res,next)=>{
//
// });
// //Route to delete device info
// pristineApi.delete('devices:id', (req,res,next)=>{
//
// });



module.exports = devicesApi;
