/*********************/
/****** DATABASE *****/
/*********************/
const mongoose = require('mongoose');
const photoController = require('./photoController')
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


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'))
})

/************************/
/***** CONTROLLERS ******/
/************************/

app.get('/photos', photoController.displayPhotos);
app.post('/photos', photoController.addPhoto);


const PhotoObj = [
  {
    name: "Bryan",
    photoLink: "http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg",
  },
  {
    name: "Bryan",
    photoLink: "http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg",
  },
  {
    name: "Bryan",
    photoLink: "http://c2.staticflickr.com/8/7231/6947093326_df216540ff_b.jpg",
  },
  {
    name: "Bryan",
    photoLink: "http://c1.staticflickr.com/9/8788/17367410309_78abb9e5b6_b.jpg",
  },
  {
    name: "Bryan",
    photoLink: "http://c2.staticflickr.com/6/5814/20700286354_762c19bd3b_b.jpg",
  },
  {
    name: "Bryan",
    photoLink: "http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg",
  },
  {
    name: "Bryan",
    photoLink: "http://c2.staticflickr.com/6/5588/14991687545_5c8e1a2e86_b.jpg",
  },
  {
    name: "Bryan",
    photoLink: "http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg",
  },
  {
    name: "Bryan",
    photoLink: "http://c2.staticflickr.com/8/7579/15482110477_0b0e9e5421_b.jpg",
  },
]

// photoController.addPhoto(PhotoObj);

app.listen(port, () => console.log(`Listening on Port ${port}`))









/***** NOTES ******/
// app.get(bundle.js) is needed for index.html to find the script f