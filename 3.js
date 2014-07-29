var fs = require('fs')
    , gm = require('gm');

// resize and remove EXIF profile data
gm('source/1.gif[0]')
    .noProfile()
    .write('dest/gif.png', function (err) {
        if (!err) console.log('done');
        else{
            console.log(err);
        }
    });

gm("source/1.jpg").
    autoOrient().
    write("dest/autoOrient.jpg",function(err){
        if(!err){
            console.log("done");
        }
    })