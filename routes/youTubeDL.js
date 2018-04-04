var fs = require('fs');
var ytdl = require('ytdl-core');
var youtubedl = require('youtube-dl');


/*exports.getYouTubeDL = function(req, res, url) {
    ytdl.getInfo(url, function(err, info) {
        if (err) throw err;
        var format = ytdl.chooseFormat(info.formats, { quality: '134' });
        if (format) {
            console.log('Format found!', format);
            res.send(format);
        }
    })

    // res.send({msg: 'success'});
};*/



exports.getYouTubeDL = function(req, res, url) {
    var url = 'https://www.youtube.com/watch?v=uM3YROq_cLY';

// pass ['-f', 'bestaudio'] || ['-f', 'm4a'] for other formats with yt

    youtubedl.exec(url, ['-x', '--audio-format', 'mp3'], {}, function exec(err, output) {
        'use strict';
        if (err) { throw err; }
        console.log(output.join('\n'));
    });
};