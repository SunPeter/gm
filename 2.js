var file=require("fs"),
    gm=require("gm");

gm("dest/resize1.jpg").size(function(err,size){
    if(!err){
        console.log(size.width+":"+size.height);
    }
});

gm("dest/resize1.jpg").identify(function(err,data){
    if(!err){
        console.log(data);
    }
});