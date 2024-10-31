$(document).ready(function(){
  
  // 처음 나오는 모달창
  $(".modal-intro").fadeIn();
  $(".btn-guide").click(function() {
    $(".modal-intro").fadeOut();
  });

  //TOP버튼
  $(".top_btn").click(function(){
    $("html,body").animate({scrollTop:0})
  });

  //탑버튼&오른쪽 퀵메뉴_________________________________
  $(".top_btn").hide(); //탑버튼 숨기기
  $("#dot").hide(); //퀵메뉴 숨기기

  var previousScroll = 0;
  
  $(window).scroll(function(){
    
    /* 위치확인용 숫자 */
    let scrollpos = $(this).scrollTop();
    $("#txt1").text(scrollpos);
    
    //스크롤이 300이상일 때 TOP버튼, 오른쪽 퀵메뉴 보이게 하고 스크롤을 올리면 다시 숨김
    if(scrollpos>=300){
      $(".top_btn").fadeIn();
      $("#dot").fadeIn();
    }else{
      $(".top_btn").fadeOut();
      $("#dot").fadeOut();
    };

    /* GNB______________________________ */
    if (scrollpos > previousScroll) {
      // 스크롤을 아래로 내릴 때
      $('header').removeClass('scroll-up').addClass('scroll-down');
    } else {
      // 스크롤을 위로 올릴 때
      $('header').removeClass('scroll-down').addClass('scroll-up');
    }
    previousScroll = scrollpos;

    /* CONTENTS________________________________ */
    //컨텐츠1 위치:scroll 0~930
    if(scrollpos>=0 && scrollpos<930){
      $("#dot .d1").addClass("active");
    }else{
      $("#dot .d1").removeClass("active");
    };

    //컨텐츠2 위치:scroll 930~1860
    if(scrollpos>=930 && scrollpos<1860){
      $("#dot .d2").addClass("active");
    }else{
      $("#dot .d2").removeClass("active");
    };

    //컨텐츠3 위치:scroll 1860~2790
    if(scrollpos>=1860 && scrollpos<2790){
      $("#dot .d3").addClass("active");
    }else{
      $("#dot .d3").removeClass("active");
    };

    //컨텐츠4 위치:scroll 2790~3720
    if(scrollpos>=2790 && scrollpos<3720){
      $("#dot .d4").addClass("active");
    }else{
      $("#dot .d4").removeClass("active");
    };

    //컨텐츠5 위치:scroll 3720~4650
    if(scrollpos>=3720 && scrollpos<4650){
      $("#dot .d5").addClass("active");
    }else{
      $("#dot .d5").removeClass("active");
    };

    //컨텐츠6 위치:scroll 4650~5580
    if(scrollpos>=4650 && scrollpos<5580){
      $("#dot .d6").addClass("active");
    }else{
      $("#dot .d6").removeClass("active");
    };

    //컨텐츠7 위치:scroll 5580~6510
    if(scrollpos>=5580 && scrollpos<6510){
      $("#dot .d7").addClass("active");
    }else{
      $("#dot .d7").removeClass("active");
    };

    //컨텐츠8 위치:scroll 6510~7440
    if(scrollpos>=6510 && scrollpos<7440){
      $("#dot .d8").addClass("active");
    }else{
      $("#dot .d8").removeClass("active");
    };

    //컨텐츠9 위치:scroll 7440~10000
    if(scrollpos>=7440 && scrollpos<10000){
      $("#dot .d9").addClass("active");
    }else{
      $("#dot .d9").removeClass("active");
    };

  });

  /* About - 모달창 */
  $(".modal-notice").click(function(){
    $(".modal").fadeIn();
  });

  $(".modal").click(function(){
    $(".modal").fadeOut();
  });

  $(".modal-notice2").click(function(){
    $(".modal2").fadeIn();
  });

  $(".modal2").click(function(){
    $(".modal2").fadeOut();
  });


  /* Career - Gallery */
  $(".thumbs a").click(function(){
    let path = $(this).attr("href"); //패스에다가 href를 통쨰로 가져오기
    $("#largeImg>img").attr({"src":path}).hide().fadeIn();
    return false;
  });

  /* Project - 뷰페이지 모달 */
  //각 목록을 클릭할 떄
  $(".p_menu").click(function(){
    $(this).next().show();
    $("html").css({"overflow-y":"hidden"});
    //return false; a기능차단을 위해 넣지만 지금은 연결된 상태가 아니므로 넣지 않아도 됨
  });

  //close버튼과 검정배경영역을 클릭할때{
  $(".close, .pop").click(function(){
    $(".pop").hide();
    $("html").css({"overflow-y":"scroll"});
  });


  // _________________Planning

  //Planning-TOP버튼
  $(".tab2 li").click(function(){
    $(".tabContent").animate({scrollTop:0})
  });

  // tab menu
  $(".tab li").click(function () {
    var num = $(".tab li").index(this);
    $(".tabContent").removeClass('active');
    $(".tabContent").eq(num).addClass('active');
    $(".tab li").removeClass('active');
    $(this).addClass('active')
  });

  $(".tab2 li").click(function () {
    var num = $(".tab2 li").index(this);
    $(".tabContent2").removeClass('active');
    $(".tabContent2").eq(num).addClass('active');
    $(".tab2 li").removeClass('active');
    $(this).addClass('active')
  });

  //해당 탭메뉴를 클릭할 때 무조건 해당 첫 썸네일을 보이게 함
  $(".tab li:first-child").click(function(){
    $(".tab_t li:first").click();
  });
  $(".tab li:nth-child(2)").click(function(){
    $(".tab_tt li:first").click();
  });
  $(".tab li:nth-child(3)").click(function(){
    $(".tab_ttt li:first").click();
  });
  $(".tab li:last-child").click(function(){
    $(".tab_tttt li:first").click();
  });




  

  //오른쪽 퀵메뉴가 보일때 클릭시 각 콘텐츠의 위치로 이동_________________
  $("#dot .d1").click(function(){
    $("body,html").animate({scrollTop:"0"},600);
  });
  $("#dot .d2").click(function(){
    $("body,html").animate({scrollTop:"930px"},600);
  });
  $("#dot .d3").click(function(){
    $("body,html").animate({scrollTop:"1860px"},600);
  });
  $("#dot .d4").click(function(){
    $("body,html").animate({scrollTop:"2790px"},600);
  });
  $("#dot .d5").click(function(){
    $("body,html").animate({scrollTop:"3720px"},600);
  });
  $("#dot .d6").click(function(){
    $("body,html").animate({scrollTop:"4650px"},600);
  });
  $("#dot .d7").click(function(){
    $("body,html").animate({scrollTop:"5580px"},600);
  });
  $("#dot .d8").click(function(){
    $("body,html").animate({scrollTop:"6510px"},700);
  });
  $("#dot .d9").click(function(){
    $("body,html").animate({scrollTop:"7440px"},600);
  });

  // 


  //Graphic Design
  //각 목록을 클릭할 떄
  $(".item_list>li").click(function(){

    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 번호
    $("html").css({"overflow-y":"hidden"}); //기존 html스크롤 숨기기
    $(".graphic_pop>li").eq(g_pop).show(); //각 목록의 내용 보이기
    $("#popup").stop().fadeIn(); //검정배경


  });

  //닫기버튼
  $(".btn_close").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".graphic_pop>li").eq(g_pop).hide();
    $("#popup").stop().fadeOut();
  });


  //이전다음버튼
  $(".left_btn").click(function(){

    if(g_pop>0){
      $(".graphic_pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;
      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".graphic_pop>li").eq(g_pop).stop().fadeIn(); 
    };

  });

  $(".right_btn").click(function(){

    if(g_pop<8){
      $(".graphic_pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop++;
      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".graphic_pop>li").eq(g_pop).stop().fadeIn(); 
    };

  });

  //GRAHIC-TOP버튼
  $(".left_btn, .right_btn").click(function(){
    $("#popup").animate({scrollTop:0})
  });

});