const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let photoSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Photo', photoSchema);