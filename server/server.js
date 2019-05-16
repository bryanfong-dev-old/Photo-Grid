/*********************/
/****** DATABASE *****/
/*********************/
const mongoose = require('mongoose');
const { resetPhotos, getPhotos, resetHover, addPhoto, toggleHover } = require('./photoController');
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
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//ALLOWS CORS! 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'))
})

/************************/
/***** CONTROLLERS ******/
/************************/

app.get('/photos', resetHover, getPhotos);
app.post('/photos', addPhoto);
app.put('/photos', toggleHover);
app.get('/reset', resetPhotos);


app.listen(port, () => console.log(`Listening on Port ${port}`))









/***** NOTES ******/
// app.get(bundle.js) is needed for index.html to find the script f