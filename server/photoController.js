const Photo = require('./PhotoModel')


module.exports = {
  displayPhotos: (req, res) => {
    Photo.find((err, doc) => {
      if (err) throw err;
      if (!doc) res.send("Cannot find any photos")
      console.log("Photo Displayed!")
      res.json(doc);
    });
  },

  addPhoto: (req, res) => {
    Photo.create(req.body, (err, doc) => {
      console.log(req.body);
      if (err) throw err;
      console.log("Photo Added!")
      res.json(doc);
    })
  },

}
