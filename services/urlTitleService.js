var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

exports.getYouTubeDL = function(req, res) {


        if(req.query.url){
            request(req.query.url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    const $ = cheerio.load(body);
                    const webpageTitle = $("title").text();
                    const metaDescription =  $('meta[name=description]').attr("content");
                    const webpage = {
                        title: webpageTitle,
                        metaDescription: metaDescription
                    }
                    res.send(webpage);
                }
            });
        };
}
/*
exports.getYouTubeDL = function(req, res, url) {
    console.log('urlTitlesvc url', url);
    fetch(`https://crossorigin.me/${url}`)
        .then((response) => response.text())
        .then((html) => {
            console.log('html', html);
            const doc = new DOMParser().parseFromString(html, "text/html");
            const title = doc.querySelectorAll('title')[0];
            console.log('URLTitleSVC title', title);
            res.send({title: title});
        });

}*/
