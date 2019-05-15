/*********************/
/****** DATABASE *****/
/*********************/
const mongoose = require('mongoose');
const PhotoController = require('./photoController')
mongoose.connect('mongodb://localhost/solo-project-db', (err) => {
  if (err) throw err;
  console.log('Successfully connected to mongodb!')
})

/********************/
/***** EXPRESS ******/
/********************/

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'))
})

app.listen(port, () => console.log(`Listening on Port ${port}`))









/***** NOTES ******/

// app.get(bundle.js) is needed for index.html to find the script f