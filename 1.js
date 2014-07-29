var fs = require('fs')
  , gm = require('gm');

// resize and remove EXIF profile data
gm('source/1.jpg')
.resize(400, 640)
.noProfile()
.write('dest/resize1.jpg', function (err) {
  if (!err) console.log('done');
        else{
      console.log(err);
  }
});