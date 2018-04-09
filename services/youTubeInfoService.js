var request=require('request');

const ytURLPrefix = 'https://www.googleapis.com/youtube/v3/videos?key=';
const ytURLPostfix = '&part=snippet&id=';

exports.getYouTubeInfo = function(req, res, url, api) {
    var myRe = /=(.*)/g;
    var myArray = myRe.exec(url);
    var ytID = null;
    var options = {};

    if (myArray) {
        ytID = myArray[1];
       options = {
            url: ytURLPrefix + api + ytURLPostfix + ytID,
            method: 'GET',
        }
    } else {
        res.send({error: 'Could not retrieve id from YouTube URL'});
    }

  request.get(options, function(err, response, body) {
    if(err) {
      console.log('error: ', err);
    }
    if(res.statusCode !== 200 ) {
      console.log('response', res);
    }
    res.send(body);
  });
}