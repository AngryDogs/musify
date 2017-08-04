const express = require('express');
const YouTube = require('./youtube');
const credientials = require('./credientials');
const youtubeStream = require('youtube-audio-stream')
const compression = require('compression')

const app = express();
const PORT = 8000;
const youTubeService = new YouTube();
const VIDEOS_COUNTER = 15;

youTubeService.setKey(credientials.apiKey);

app.use(compression());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
  res.send(`App running on port ${PORT}`)
});

app.get('/search', (req, res) => {
  youTubeService.search(req.query.keyPhrase, VIDEOS_COUNTER, (error, result) => {
    if(error) {
      res.status(400);
      res.send(error);
    } else {
      res.status(200);
      res.send({ body: result});
    }
  });
});

app.get('/music', (req, res) => {
  const url = 'https://www.youtube.com/embed/' + req.query.videoId;
  try {
    youtubeStream(url).pipe(res);
  } catch (exception) {
    res.status(500).send(exception)
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
