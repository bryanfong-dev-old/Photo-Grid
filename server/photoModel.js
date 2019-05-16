const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let photoSchema = new Schema({
  author: { type: String, required: true },
  html_link: { type: String, required: true },
  date_added: { type: Date, default: Date.now },
  isHovering: { type: Number, default: 0 }
})

module.exports = mongoose.model('Photo', photoSchema);
