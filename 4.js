var fs = require('fs')
    , gm = require('gm');

// resize and remove EXIF profile data
gm('source/1.jpg')
    .noProfile()
    .flip()
    .write('dest/mirror.jpg', function (err) {
        if (!err) console.log('done');
        else{
            console.log(err);
        }
    });

gm('source/1.jpg')
    .noProfile()
    .magnify(3)
    .write('dest/magnigy.jpg', function (err) {
        if (!err) console.log('done');
        else{
            console.log(err);
        }
    });

gm('source/1.jpg')
    .noProfile()
    .rotate("#FF0",45)
    .write('dest/rotate.jpg', function (err) {
        if (!err) console.log('done');
        else{
            console.log(err);
        }
    });

gm('source/1.jpg')
    .noProfile()
    .blur(5,0)
    .write('dest/blur.jpg', function (err) {
        if (!err) console.log('done');
        else{
            console.log(err);
        }
    });