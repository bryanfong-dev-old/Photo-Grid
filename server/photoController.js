const PhotoModel = require('./PhotoModel');
const sample = require('./samplePhotos');


module.exports = {

  resetPhotos: async (req, res, next) => {
    PhotoModel.collection.drop()
    await PhotoModel.create(sample, (err, doc) => {
      console.log(sample);
      if (err) throw err;
      console.log("Photo Resetted!")
      // res.json(doc);
    })
  },

  getPhotos: (req, res) => {
    PhotoModel.find((err, doc) => {
      if (err) throw err;
      if (!doc) res.send("Cannot find any photos")
      console.log("Photo Displayed!")
      res.json(doc);
    });
  },

  addPhoto: (req, res) => {
    PhotoModel.create(req.body, (err, doc) => {
      console.log(req.body);
      if (err) throw err;
      console.log("Photo Added!")
      res.json(doc);
    })
  },



}
