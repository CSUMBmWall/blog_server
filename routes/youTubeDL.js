var fs = require('fs');
var ytdl = require('ytdl-core');
var youtubedl = require('youtube-dl');
var ffmpeg = require('ffmpeg');


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

    youtubedl.exec(url, ['-x', '--audio-format', 'mp3'], {}, function exec(err, output) {
        'use strict';
        if (err) { throw err; }
        console.log(output.join('\n'));
        res.send({status: output.join('\n')});
    });
   /* var testFile = 'Blaze Foley - Clay Pigeons.webm';
    var newFile = 'Blaze Foley - Clay Pigeons.mp3';
    try {
        var process = new ffmpeg(testFile);
        process.then(function (video) {
            // Callback mode
            video.fnExtractSoundToMP3(newFile, function (error, file) {
                if (!error)
                    console.log('Audio file: ' + file);
            });
        }, function (err) {
            console.log('Error: ' + err);
        });
    } catch (e) {
        console.log(e.code);
        console.log(e.msg);
    }*/
};