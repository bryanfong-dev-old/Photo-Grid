const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.resolve(__dirname, '../public')));

//get request for bundle.js so index.html can find it. 
app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/bundle.js'))
})

app.listen(port, () => console.log(`Listening on Port ${port}`))
