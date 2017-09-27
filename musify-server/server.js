const express = require('express');
const YouTube = require('./youtube');
const credientials = require('./credientials');
const compression = require('compression');

const app = express();
const PORT = 8000;
const youTubeService = new YouTube();
const VIDEOS_COUNTER = 15;

const fs = require('fs');
const ytdl = require('ytdl-core');
const stream = require('youtube-audio-stream')

const bitrate = 128;

youTubeService.addParam('part', 'contentDetails');
youTubeService.setKey(credientials.apiKey);

function getAllIdsToString(result) {
  let ids = "";
  result.items.forEach((video, index) => {
    if(video.id.videoId) {
      if(result.items.length == index) ids += video.id.videoId;
      else ids += video.id.videoId + ",";
    }
  });
  return ids;
}

function getRangeFirstPart(rangeString) {
  return rangeString.replace(/bytes=/, "").split("-")[0];
}



const calculateContentLength = (duration) => {
  return ((duration * bitrate) / 8) * 1000
}

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
    let ids = getAllIdsToString(result);
    youTubeService.getById(ids, (err, resp) => {
      if(err) {
        res.status(400);
        res.send(err);
      } else {
        res.status(200);
        res.send({ body: resp});
      }
    });
  });
});

app.get('/music', (req, res) => {
  const url = 'http://www.youtube.com/watch?v=' + req.query.videoId;
  const client = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    stream(url).pipe(res);
  } catch (exception) {
    res.status(500).send(exception);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
