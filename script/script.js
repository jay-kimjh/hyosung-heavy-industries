$("#depth3>.cen").slick({
    variableWidth: true,
    infinite: false
});

// scrchk이라는 계획은 다음과 같다.
//    먼저 스크롤을 얼마나 했는지 알아내고 그것을 scr이라고 부르자
//    #h2box의 높이를 측정해서 그것을 h2height라고 부르자
//    만약에 scr > h2height 이면
//       #depth3에게 "fixmenu"라는 클래스를 준다.
//    그렇지 않다면
//       #depth3에게서 "fixmenu"라는 클래스를 뺏는다.
//
// 그렇다면 scrchk라는 계획은 언제 발동되는가?
// 처음 문서를 열자마자. 그리고 화면을 스크롤할때마다.
function scrchk(){
    var scr = $(window).scrollTop();
    var h2height = $("#h2box").height();
    if(scr > h2height){
        $("#depth3").addClass("fixmenu");
    }else{
        $("#depth3").removeClass("fixmenu");
    }
}

scrchk();
$(window).scroll(function(){
    scrchk();
});


// ※ 목적 : 모든 .table에게
//          .tablebox라는 부모 div를 만들어 주는것 

// 모든 .table에게 각각 따로 따로 다음과같이 이야기하겠다.
    // 지금그것 바로 직전에
    // "<div class='tablebox'></div>"를 만든다.
    // 지금그것을 복제해서
    // 지금그것 바로 직전에 있는 .tablebox안쪽에 넣는다.
    // 지금그것을 삭제한다.
$(".table").each(function(){
    $(this).before("<div class='tablebox'></div>");
    $(this).clone()
        .appendTo( $(this).prev(".tablebox") );
    $(this).remove();
});


// .tabbtn을 눌렀을때 다음과같이 이야기하겠다.
    // 방금눌린그것이 형제들 중 몇번째인가?
    // 그 번째 수를 idx라고 하자.
    // 모든 .tabcont들을 모조리 숨겨주고
    // idx번째 .tabcont만 다시 보여준다.
    // 모든 .tabbtn들로부터 "tactive"라는
        // 클래스를 뺏는다.
    // 방금눌린그것에게 "tactive"라는
        // 클래스를 준다.
$(".tabbtn").click(function(){
    var idx = $(this).index();
    $(".tabcont").hide();
    $(".tabcont").eq(idx).show();
    $(".tabbtn").removeClass("tactive");
    $(this).addClass("tactive");
});


// 모든 h3 뒷부분에는 무조건
// "<div></div>"를 추가한다.
$("h3").after("<div></div>");

// .accbtn을 클릭했을때 다음과 같은 일이 벌어진다.
    // 방금클릭한그녀석의 동생 .acccont를 보여/숨겨준다.
    // 방금클릭한그녀석에게 "aactive"라는 클래스를
        // 주거나/뺏는다.
    // 만약 지금클릭한그녀석이 "aactive"라는 클래스를
        // 가지고 있다면
            // 그 안에 들어있는 span의 내용을 -로 고친다.
        // 가지고 있지 않다면
            // 그 안에 들어있는 span의 내용을 +로 고친다.
$(".accbtn").click(function(){
    $(this).next(".acccont").slideToggle();
    $(this).toggleClass("aactive");
    if($(this).hasClass("aactive")){
        $(this).children("span").text("-");
    }else{
        $(this).children("span").text("+");
    }
});

// .bdepth가 눌렸을때 다음과같은일이 벌어진다.
    // 방금눌린그것을 제외한 형제들
        // "bactive"라는 클래스를 뺏는다.
    // 방금눌린그것에게 "bactive"라는 클래스를
        // 준다/뺏는다.
$(".bdepth").click(function(){
    $(this).siblings().removeClass("bactive");
    $(this).toggleClass("bactive");
});

// #search>button이 눌렸을때 다음과같은일을 할것이다.
    // #search>input에 쓴값(value)의 글자수를 len이라고 하자.
    // 만약 len이 2이상이면
        // #search를 submit(action에 쓴 파일로 데이터를 보냄)
    //그게 아니라면
        // 경고창 띄우기(두글자 이상 입력해 주세요.)

$("#search>button").click(function(){
    var len = $("#search>input").val().length;
    if(len >= 2){
        $("#search").submit();
    }else{
        alert("검색어를 두글자 이상 입력해 주세요.");
    }
});

// 데이터의 타입(형식)
// 1. 숫자 : 계산할 수 있음. 1+1 = 2
    // 1.0 자연수(Nature Number) : 1부터 시작하는 소수점이 없는 숫자
    // 1.1 정수(Intrger) : 소수점이 없는 숫자
    // 1.2 실수(Float) : 소수점이 있는 숫자
// 2. 문자열(string) : 계산할 수 없음. "a"+"b" = "ab"
// 3. 논리값|불리언(boolean)|부울값 : 참(true), 거짓 (false)
// 4. 빈값(undefind|null)


// #menuback2를 눌렀을떄 다음과 같은 일이 벌어진다.
    // #ham을 누른것으로 간주한다.
//$("#menuback2").click(function(){
    // $("#ham").trigger("click");
//});
