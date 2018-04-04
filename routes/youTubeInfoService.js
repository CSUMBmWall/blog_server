var request=require('request');

/*const ytURLPrefix = 'https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=G1gC912LUq0';*/
/*const ytURLPrefix = 'https://www.youtube.com/oembed?format=json&url=';*/

const ytURLPrefix = 'https://www.googleapis.com/youtube/v3/videos?key=';
const ytURLPostfix = '&part=snippet&id=uM3YROq_cLY';

exports.getYouTubeInfo = function(req, res, id, api) {

  const options = {
      url: ytURLPrefix + api + ytURLPostfix + ytURLPostfix,
      method: 'GET',
  }

  /*console.log(options);*/

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



/*exports.getYouTubeInfo = request.get(ytURL,function(err,res,body){
    if(err) {
      console.log('error: ', err);
      /!*callback(error);*!/
      // return err;
    }
    if(res.statusCode !== 200 ) {
      console.log('response', res);
     /!* callback(new Error('Invalid Status Code Returned: ' + res.statusCode));*!/
    } else {
      /!*var ytInfo = JSON.parse(body);
      callback(null, ytInfo);*!/

    }
  })
};*/

/*module.exports = {
  getYouTubeInfo: function() {
    return request('https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=G1gC912LUq0');

  }

  /!*module.exports = {
  getYouTubeInfo: function(req, callback) {
    request('https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=G1gC912LUq0', function(error, response, body) {

      //Check for error
      if (error) {
        callback(error);
      }
      //Check for success status code
      if (response.statusCode !== 200) {
        callback(new Error('Invalid Status Code Returned:' + response.statusCode));
      }
      var ytInfo = JSON.parse(body);
      callback(null, ytInfo);
    });

  }*!/
}*/
