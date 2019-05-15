const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let photoSchema = new Schema({
  author: { type: String, required: true },
  photo_link: { type: String, required: true },
  date_added: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Photo', photoSchema);
