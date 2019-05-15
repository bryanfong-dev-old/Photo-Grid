const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let photoSchema = new Schema({
  author: { type: String, required: true },
  photoLink: { type: String, required: true },
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Photo', photoSchema);