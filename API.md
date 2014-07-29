#gm API#
##文件操作##
1.  resize(w,h)    
2.  noProfile()  
>去除Exif 等文件信息；Exif=JPEG+拍摄参数。因此，你可以利用任何可以查看JPEG文件的看图软件浏览Exif格式的照片，但并不是所有的图形程序都能处理Exif信息。
3.  write(path,callback)  
4.  size(err,size)
>size:object<width&&height  
5.  identify(err,data)
>图片所有信息  
6.  gm(....gif[0])  
>获取gif图的第一帧  
7.  autoOrient()  
8.  flip() 
>镜像  
9.  magnify(factor)  
>默认放大2倍  
10. rotate(color,degree)
>旋转degree 背景色填充color  
11. blur(radius,sigma)
>模糊度radius   偏移sigma  
12. crop(w,h,offsetx,offsety)
>截取宽w高h  位置从原图x,y除截取  
13. edge(factor)
>边缘检测  
14. stroke/fill/drawCircle/drawText 

#流操作#
1.  fs.createReadStream(src)
>获取文件流  
2.