const NodeID3 = require('node-id3');

/*file = "D:\\Music\\Jerry Lee Lewis\\Jerry Lee Lewis - Anthology (All Killer No Filler) Disc 1 - Crazy Arms.mp3"*/
file = "C:\\Users\\Matt\\Downloads\\Music\\Van Morrison\\Van Morrison - " +
    "It's Too Late To Stop Now Disc 1 - Caravan (Live At The Troubadour).mp3";



exports.getID3Tags = function(req, res) {
    const fileLoc = req.query.fileLoc;
    let tags = NodeID3.read(fileLoc)
    NodeID3.read(fileLoc, function(err, tags) {
        /*
        tags: {
          title: "Tomorrow",
          artist: "Kevin Penkin",
          image: {
            mime: "jpeg",
            type: {
              id: 3,
              name: "front cover"
            },
            description: String,
            imageBuffer: Buffer
          },
          raw: {
            TIT2: "Tomorrow",
            TPE1: "Kevin Penkin",
            APIC: Object (See above)
          }
        }
        */
        console.log(tags);
        res.send({tags: tags});
    })

}

exports.setID3Tags = function() {
    return null;
};



exports.removeTag = function(req, res, filepath){
    let success = NodeID3.removeTags(filepath)  //  returns true/false
    NodeID3.removeTags(filepath, function(err) {
        console.log(error);
    })
}
