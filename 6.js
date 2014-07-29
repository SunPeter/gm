var fs = require('fs')
    , gm = require('gm');

// resize and remove EXIF profile data
var stream=fs.createReadStream("source/1.jpg");
console.log(stream);
gm(stream,'source/1.jpg')
    .resize(400, 640)
    .noProfile()
    .write('dest/stream1.jpg', function (err) {
        if (!err) console.log('done');
        else{
            console.log(err);
        }
    });