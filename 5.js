var fs = require('fs')
    , gm = require('gm');

// resize and remove EXIF profile data
gm('source/1.jpg')
    .crop(100,100,0,0)
    .noProfile()
    .write('dest/crop.jpg', function (err) {
        if (!err) console.log('done');
        else{
            console.log(err);
        }
    });

gm('source/1.jpg')
    .edge(5)
    .write('dest/edge.jpg', function (err) {
        if (!err) console.log('done');
        else{
            console.log(err);
        }
    });

gm('source/1.jpg')
    .stroke("#F00")
    .fill("#FF0")
    .drawCircle(10, 10, 20, 10)
    .font("Arial.ttf", 18)
    .drawText(0, 0, "PeterSun")
    .write('dest/stroke.jpg', function (err) {
        if (!err) console.log('done');
        else{
            console.log(err);
        }
    });

gm(200,200,"#FF0")
    .drawText(10, 50, "from scratch")
    .write("dest/create.jpg", function (err) {
        if(!err){
            console.log("done");
        }
    });