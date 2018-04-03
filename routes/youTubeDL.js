var fs = require('fs');
var ytdl = require('ytdl-core');



exports.getYouTubeDLInfo = function(req, res, url) {
    ytdl.getInfo(url, function(err, info) {
        if (err) throw err;
        var format = ytdl.chooseFormat(info.formats, { quality: '134' });
        if (format) {
            console.log('Format found!', format);
            res.send(format);
        }
    })

    // res.send({msg: 'success'});
};