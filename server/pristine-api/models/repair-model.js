const mongoose = require('mongoose');
const Location = require('../models/location-model');
const Device = require('../models/device-model');
const Review = require('../models/review-model');

const Schema = mongoose.Schema;

const repairSchema = new Schema(
  {
    tech: {type: String},
    customer: {type: String},
    device: {type: [Device.schema]},
    review: {type: [Review.schema]},
    location: {type: [Location.schema]},
    dateRequested: {type: Date},
    dateCompleted: {type: Date}
  },
  {
    timestamps:
    {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Repair = mongoose.model('Repair', repairSchema);

module.exports = Repair;
