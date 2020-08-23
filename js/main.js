$("#gnb .gnbList > li").on("mouseenter",function(){
    if(!$("body").hasClass("resize")){
        $(".depth02",this).stop().slideDown(250);
    }

});

$("#gnb .gnbList > li").on("mouseleave",function(){
    if(!$("body").hasClass("resize")){
        $(".depth02",this).stop().slideUp(250);
    }
});

// navigation

$("#gnb .gnbList > li .depth01").on("click",function() {
    $(this).next(".depth02").stop().slideToggle();
    $(this).parent().siblings().find(".depth02").stop().slideUp();
    return false;
});

$(".utilMenu .btnMenu").on("click",function(){
    if(!$("body").hasClass("resize")){
        $("#siteMap").fadeIn(250);
        $("body").addClass("overHidden");
        $(".btnMenu").hide();
    } else {
        if($("body").hasClass("resize")){
            $("#gnb").toggleClass("on");
        }
    }
    return false;
});

$(".btnClose").on("click",function(){
    $("#siteMap").fadeOut(250);
    $("body").removeClass("overHidden");
    $(".btnMenu").show();
}); 

// sitemap || resize 시 navigation

// #header end

let mainVisual = new Swiper("#mainVisual .mask",{
    speed:1000,
    loop:true,
    autoplay:{
        delay:4000,
    },
    navigation: {
        nextEl:"#mainVisual .btnNext",
        prevEl:"#mainVisual .btnPrev",
    },
});

// #mainVisual end

new Swiper("#quickMenuSlide",{
    speed:1000,
    loop:true,
    slidesPerView:1,
    spaceBetween:8,
});

// #quickMenu end

$(window).on("scroll",function(){
    let st = this.scrollY
    // console.log(st);
    if(st >= 90){
        if(!$("body").hasClass("resize")){
            $("#header").addClass("on");
        }
    } else {
        $("#header").removeClass("on");
    }
    if(st >= 272){
        $("#quickMenu").animate({
            opacity:1,
            marginTop:"-70px",
        },0);
    } else if(st <= 0) {
        $("#quickMenu").animate({
            marginTop:"70px",
            opacity:0,
        },0);
    }
});

// scroll 시 애니메이션

$(window).on("resize",function(){
    let w = $(window).width()+17;
    //console.log("w", w)
    if (w <= 1600) {
        if(!$("body").hasClass("resize")){
            $("body").addClass("resize");
            $("body").removeClass("overHidden");
        }
        $("#siteMap").hide();
        $(".btnMenu").show();
    } else {
        if($("body").removeClass("resize")){;
        }
    }
});

// resize시 이벤트

$(window).trigger("scroll");
$(window).trigger("resize");

let ratio = window.devicePixelRatio;
    if (ratio >= 2){
        document.querySelector("body").classList.add("mobile")
    } else {
        document.querySelector("body").classList.add("pc")
    };
// PC / MOBILE 접속 구분 

