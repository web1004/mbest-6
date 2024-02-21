
$(document).ready(function () {
  //각 목록을 클릭했을때
  $(".item_list>li").click(function () {
    g_pop = $(this).index();
    $("#popup").stop().fadeIn(); // 검정배경
    $(".pop>li").eq(g_pop).show(); //각 목록의 내용
    $(".g_page span:nth-child(1)").text(g_pop + 1); //오른쪽 상당 페이지번호
    $("html").css({ overflowY: "hidden" }); //기존 html 스크롤 숨기기
    $("#nav_icon").css({ display: "none" });
    $(".topllogo").css({ opacity: "0" });
    $("nav").css({ display: "none" });
    $("#fp-nav ul li ").css({ display: "none" });
  });
  //이전다음버튼
  $(".left_btn").click(function () {
    if (g_pop > 0) {
      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;
      $(".g_page span:nth-child(1)").text(g_pop + 1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    }
  });
  $(".right_btn").click(function () {
    if (g_pop < 8) {
      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop++;
      $(".g_page span:nth-child(1)").text(g_pop + 1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    }
  });
  //close버튼
  $(".btn_close").click(function () {
    $("html").css({ "overflow-y": "scroll" });
    $("#popup").stop().fadeOut();
    $(".pop>li").stop().hide();
    $("#nav_icon").css({ display: "block" });
    $(".topllogo").css({ opacity: "1" });
    $("nav").css({ display: "block" });
    $("#fp-nav ul li ").css({ display: "block" });
  });
});

/* tab2 */
$(document).ready(function () {
  //각 목록을 클릭했을때
  $(".item_list2>li").click(function () {
    g_non = $(this).index();
    $(".pop2>li").eq(g_non).show(); 
    $("#popup2").stop().fadeIn();
    $(".page span:nth-child(1)").text(g_non + 1);
    $(".topllogo").css({ opacity: "0" });
    $("html").css({ overflowY: "hidden" });
    $("#nav_icon").css({ display: "none" });
    $("nav").css({ display: "none" });
    $("#fp-nav ul li ").css({ display: "none" });
  });
  //이전다음버튼
  $(".left_btn2").click(function () {
    if (g_non > 0) {
      $(".pop2>li").eq(g_non).stop().fadeOut();
      g_non--;
      $(".page span:nth-child(1)").text(g_non + 1);
      $(".pop2>li").eq(g_non).stop().fadeIn();
    }
  });
  $(".right_btn2").click(function () {
    if (g_non < 7) {
      $(".pop2>li").eq(g_non).stop().fadeOut();
      g_non++;
      $(".page span:nth-child(1)").text(g_non + 1);
      $(".pop2>li").eq(g_non).stop().fadeIn();
    }
  });
  //close버튼
  $(".btn_close2").click(function () {
    $("html").css({ "overflow-y": "scroll" });
    $("#popup2").stop().fadeOut();
    $(".pop2>li").stop().hide();
    $("#nav_icon").css({ display: "block" });
    $(".topllogo").css({ opacity: "1" });
    $("nav").css({ display: "block" });
    $("#fp-nav ul li ").css({ display: "block" });

  });
});




const container = document.querySelector('.ppop');
const closeButton = document.querySelector('.closed');
$(window).on('load',function(){
  $(".ppop").stop().fadeIn();;
});
closeButton.addEventListener('click', () => {
  container.style.display = 'none';
  openButton.style.display = 'flex';
});
