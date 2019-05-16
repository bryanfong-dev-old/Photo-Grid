const photosArray = [
  "http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg",
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/28/13/TV.jpg?w968h681",
  "http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg",
  "https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "http://c2.staticflickr.com/8/7231/6947093326_df216540ff_b.jpg",
  "http://c1.staticflickr.com/9/8788/17367410309_78abb9e5b6_b.jpg",
  "https://i.pinimg.com/736x/64/67/ed/6467edd92167201bd60317e0d36e602c--landscape-photography-tips-black-photography.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYL4avBjAuHNSTd3lAzZslDVGbumStHrr1Jn7pUby4rqyGyyYc2A",
  "http://c2.staticflickr.com/6/5814/20700286354_762c19bd3b_b.jpg",
  "http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg",
  'https://images.pexels.com/photos/48794/boy-walking-teddy-bear-child-48794.jpeg?cs=srgb&dl=black-and-white-child-cute-48794.jpg&fm=jpg',
  "http://c2.staticflickr.com/6/5588/14991687545_5c8e1a2e86_b.jpg",
  "https://i.pinimg.com/474x/f0/fa/a2/f0faa2d9f75de4b0c3b9166075f33fe6--black-white-photography-vintage-photography.jpg",
  "http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg",
  "http://c2.staticflickr.com/8/7579/15482110477_0b0e9e5421_b.jpg",
]

const names = [
  "Jarred",
  "Adam",
  "David",
  "Tayvon",
  "Bo",
  "Kate",
  "Nel",
  "Jeff",
  "Tyler",
  "Nathan",
  "Tevin",
  "Christian",
  "Joe",
  "Jake",
  "Luis",
]

const samplePhotos = [];

for (let i = 0; i < photosArray.length; i++) {
  const temp = {};
  temp.author = names[i];
  temp.html_link = photosArray[i];
  temp.page = "demo";
  samplePhotos.push(temp);
}

module.exports = samplePhotos;