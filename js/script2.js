new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  normalScrollElements: "#popup,#popup2,.contimgbox:hover,.pop3,.pop4,.webpop1,.webpop2,.webpop3,.largeImg,.conboxa,.webpop4,.webpop5,.ppop",
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4", "Num5", "Num6"],
  afterLoad: function (old_elem, new_elem, direction) {
    if (new_elem.index == 0) {
      sec0();
    }
    if (new_elem.index == 1) {
      sec1();
    }
    if (old_elem.index == 1) {
      sec1_reset();
    }
    if (new_elem.index == 3) {
      sec3();
    }
    if (old_elem.index == 3) {
      sec3_reset();
    }
    if (new_elem.index == 4) {
      sec4();
    }
  },
});
function sec0() {
  $(".topllogo").css({ opacity: "0" });
}
function sec1() {
  //console.log('sec1');
  let tl = anime.timeline({
    easing: "linear",
    duration: 1000,
  });
  tl.add({
    targets: ".g01",
    width: "80%",
  })
    .add({
      targets: ".g02",
      width: "70%",
    })
    .add({
      targets: ".g03",
      width: "90%",
    })
    .add({
      targets: ".g04",
      width: "95%",
    });

  $(".topllogo").css({ opacity: "1" });
  $("#nav_icon div span ").css({ background: "#FFF" });
  $("nav").css({ background: "#ffffffaf" });
}

function sec1_reset() {
  $("#nav_icon div span ").css({ background: "#000" });
  $("nav").css({ background: "#fff" });
}

function sec3() {
  $("#nav_icon div span ").css({ background: "#FFF" });
  $("nav").css({ background: "#ffffffaf" });
}
function sec3_reset() {
  $("#nav_icon div span ").css({ background: "#000" });
  $("nav").css({ background: "#fff" });
}

function sec4() {
  let tl = anime.timeline({
    duration: 500,
    easing: "linear",
  });
  tl.add({
    targets: ".gb01",
    width: "100%",
  }).add({
    targets: ".gage_wrap2 p",
    opacity: "1",
    left: "55px",
  });
}

/* ----------------------- */
//탑메뉴
const Body = document.querySelector("body");
const Nav_Btn = document.querySelector("#nav_icon");

Nav_Btn.addEventListener("click", () => {
  Body.classList.toggle("nav_active");
});

/* -========================================= */
$(document).ready(function () {
  $(".btn li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let result = $(this).attr("data-alt");
    $(".tabContents .tebbtn").removeClass("active");
    $("#" + result).addClass("active");
  });
});

/* ifrme 모달 */
$(document).ready(function () {
  $(".tabview").click(function () {
    $(".pop3").stop().fadeIn();
    $("#fp-nav ul li ").css({ display: "none" });
    $("#nav_icon").css({ display: "none" });
    $(".topllogo").css({ opacity: "0" });
    $("nav").css({ display: "none" });
    return false;
  });

  $(".moview").click(function () {
    $(".pop4").stop().fadeIn();
    $("#fp-nav ul li ").css({ display: "none" });
    $("#nav_icon").css({ display: "none" });
    $(".topllogo").css({ opacity: "0" });
    $("nav").css({ display: "none" });
    return false;
  });

  $(".mmo_close").click(function () {
    $(".pop3, .pop4").hide();
    $("html").css({ "overflow-y": "scroll" });
    $("#fp-nav ul li ").css({ display: "block" });
    $("#nav_icon").css({ display: "block" });
    $("nav").css({ display: "block" });
  });
});

$(".viewimg").mouseenter(function () {
  $(this).css("background-position", "0 100%");
});
$(".viewimg").mouseleave(function () {
  $(this).css("background-position", "0 0");
});

$(".webpage").click(function () {
  $("html").css({ overflowY: "hidden" });
  $(".webpop1").stop().fadeIn();
  $("#fp-nav ul li ").css({ display: "none" });
  $("#nav_icon").css({ display: "none" });
  $(".topllogo").css({ opacity: "0" });
  $("nav").css({ display: "none" });
  return false;
});
$(".webpage2").click(function () {
  $("html").css({ overflowY: "hidden" });
  $(".webpop2").stop().fadeIn();
  $("#fp-nav ul li ").css({ display: "none" });
  $("#nav_icon").css({ display: "none" });
  $(".topllogo").css({ opacity: "0" });
  $("nav").css({ display: "none" });
  return false;
});

$(".webpage3").click(function () {
  $("html").css({ overflowY: "hidden" });
  $(".webpop3").stop().fadeIn();
  $("#fp-nav ul li ").css({ display: "none" });
  $("#nav_icon").css({ display: "none" });
  $(".topllogo").css({ opacity: "0" });
  $("nav").css({ display: "none" });
  return false;
});

$(".pop_close2").click(function () {
  $(".webpop1").stop().fadeOut();
  $(".webpop2").stop().fadeOut();
  $(".webpop3").stop().fadeOut();
  $("#fp-nav ul li ").css({ display: "block" });
  $("#nav_icon").css({ display: "block" });
  $(".topllogo").css({ opacity: "1" });
  $("nav").css({ display: "block" });
  $("html").css({ "overflow-y": "scroll" });
});


$(".moreniew2").click(function () {
  $("html").css({ overflowY: "hidden" });
  $(".webpop5").stop().fadeIn();
  $("#fp-nav ul li ").css({ display: "none" });
  $("#nav_icon").css({ display: "none" });
  $(".topllogo").css({ opacity: "0" });
  $("nav").css({ display: "none" });
  return false;
});


$(".moreniew").click(function () {
  $("html").css({ overflowY: "hidden" });
  $(".webpop4").stop().fadeIn();
  $("#fp-nav ul li ").css({ display: "none" });
  $("#nav_icon").css({ display: "none" });
  $(".topllogo").css({ opacity: "0" });
  $("nav").css({ display: "none" });
  return false;
});

$(".pop_close2").click(function () {
  $(".webpop1").stop().fadeOut();
  $(".webpop2").stop().fadeOut();
  $(".webpop3").stop().fadeOut();
  $(".webpop4").stop().fadeOut();
  $(".webpop5").stop().fadeOut();
  $("#fp-nav ul li ").css({ display: "block" });
  $("#nav_icon").css({ display: "block" });
  $(".topllogo").css({ opacity: "1" });
  $("nav").css({ display: "block" });
  $("html").css({ "overflow-y": "scroll" });
});



/* 웹플렌 탭*/

$(document).ready(function(){

  /* 탭메뉴클릭________________________ */
  
    $(".bbtn li").click(function(){
      
      $(this).addClass("active"); 
      $(this).siblings().removeClass("active");
  
      let result = $(this).attr("data-alt");
      $(".panel li").removeClass("active");
      $("#"+result).addClass("active");
    });
    //해당 탭메뉴를 클릭할때 해당 첫 썸네일을 클릭시킴(마지막에 누른채로 보이지 않고 항상 처음처럼 보이게 함)
    $(".bbtn li:first-child").click(function(){
      $(".gallery1 .thumbs li:first").click();
    });
    $(".bbtn li:last-child").click(function(){
      $(".gallery3 .thumbs li:first").click();
    });
  
    /* 탭메뉴별 이미지갤러기____________________ */
  
    //bbtn1-gallery
    let goldidxA=0;
    let gidxA=0;
  
    function galleryImgA(gidxA){
      if(goldidxA!=gidxA){
        $(".gallery1 .thumbs li").eq(goldidxA).css({"opacity":0.3});
        $(".gallery1 .thumbs li").eq(gidxA).css({"opacity":1});
        $(".gallery1 .largeImg li").eq(goldidxA).stop().fadeOut(300);
        $(".gallery1 .largeImg li").eq(gidxA).stop().fadeIn(300);
        };
        goldidxA=gidxA;
    };
  
    $(".gallery1 .thumbs li").click(function(){
      gidxA=$(this).index();
      galleryImgA(gidxA);
    });
  
      //tab2-gallery
      let goldidxB=0;
      let gidxB=0;
    
      function galleryImgB(gidxB){
        if(goldidxB!=gidxB){
          $(".gallery2 .thumbs li").eq(goldidxB).css({"opacity":0.3});
          $(".gallery2 .thumbs li").eq(gidxB).css({"opacity":1});
          $(".gallery2 .largeImg li").eq(goldidxB).stop().fadeOut(300);
          $(".gallery2 .largeImg li").eq(gidxB).stop().fadeIn(300);
          };
          goldidxB=gidxB;
      };
    
      $(".gallery2 .thumbs li").click(function(){
        gidxB=$(this).index();
        galleryImgB(gidxB);
      });
  
      
});

