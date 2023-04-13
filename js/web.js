var index = 1;
changeImage = function(){
    var imgs = ["ip14.jpg","cau-hinh-cua-ps5-1.jpg","anhlaptopp.jpg"];
    document.getElementById('img_tudong').src = imgs[idex];
    index++;
    if(index == 3){
        index = 0;
    } 
}

setInterval(changeImage,3000);
