const mongoose = require ('mongoose');
const Customer = require('../models/customer-model');
const Tech = require('../models/tech-model');

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    reviewer: {type: [Customer.schema]},
    subject: {type: [Tech.schema]},
    content: {type: String}
  },
  {
    timestamps:
    {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
