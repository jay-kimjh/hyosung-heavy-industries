$(".multiline").each(function(){
    var t = $(this).text();
    $(this).attr("data", t);
});

function multiline(){
    $(".multiline").each(function(){
        var h = $(this).height();
        $(this).empty().append("<div></div>");
        var word = $(this).attr("data").split(" ");
        for(i=0; i<word.length; i++){
            $(this).children("div").append("<span>"+word[i]+" </span>");     
            if($(this).children("div").height() > h+5){
                $(this).children("div").children("span").last().remove();
                $(this).children("div").children("span").last().remove();
                $(this).children("div").append("<span>...</span>");
                break;
            }
        }
    });
}

multiline();
setTimeout(multiline, 500);

$(window).resize(function(){
    multiline();
});





