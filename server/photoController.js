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
    const { author, html_link } = req.body
    const newPhoto = { author: author, html_link: html_link }
    PhotoModel.create(newPhoto, (err, doc) => {
      console.log(newPhoto);
      if (err) console.log('Error adding photo')
      console.log("Photo Added!")
      res.json(doc);
    })
  },

  toggleHover: (req, res) => {
    // console.log(req);
    // console.log("put request")
    // console.log(req.body);
    const { _id } = req.body;
    PhotoModel.findOneAndUpdate(
      { _id: _id },
      { $inc: { isHovering: 1 } },
      { new: true },
      (err, doc) => {
        if (err) console.log('Error updating hover');
        res.json(doc);
      });
  }

}