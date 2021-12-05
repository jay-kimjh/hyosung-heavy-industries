function imgfit(){
    $(".imgfit").each(function(){
        var iw = $(this).children("img").get(0).width;
        var ih = $(this).children("img").get(0).height;
        var bw = $(this).width();
        var bh = $(this).height();
        var iratio = iw/ih;
        var bratio = bw/bh;
        if(iratio > bratio) {
            $(this).children("img").height(bh).width("auto");
        }else{
            $(this).children("img").width(bw).height("auto");
        }
    });
}

$(window).resize(function(){
    imgfit();
});

$(document).ready(function(){
    imgfit();
    setTimeout(imgfit,100);
    setTimeout(imgfit,400);
});