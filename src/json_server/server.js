const express = require('express')
const app = express()
const images = require('./images.json')
const twitter = require('./twitter.json')

app.get('/images', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(images, null, 3));
})
app.get('/twitter', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(twitter, null, 10))
})

app.listen(3000, () => console.log("Serever is running on port 3000"))
