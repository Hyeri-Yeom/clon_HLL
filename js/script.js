// a의 기본속성을 제거 (클릭시 위로 튕기는 현상)
$(document).on('click','a[href="#"]', function(e){
    e.preventDefault();
});

// scrolla
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

// slick
$(document).ready(function(){
    $('.slideArea').slick({
        fade: true,              // 페이드 전환
        autoplay: true,          // 자동 재생
        autoplaySpeed: 5000,     // 5초마다
        speed: 800,             // 전환 속도
        arrows: false,           // 좌우 버튼 숨김
        dots: false,             // 인디케이터 숨김
        pauseOnHover: false,
        pauseOnFocus: false,
        });
    });


// fixheader
$(function(){
    var scrollTop = 0;
    // console.log(scrollTop)
    scrollTop = $(document).scrollTop();
    fixHeader();
})


$(window).on('scroll resize',function(){
    scrollTop = $(document).scrollTop();
    fixHeader();
})

function fixHeader() {
    if(scrollTop > 150){
        $('header').addClass('on');
    } else{
        $('header').removeClass('on');
    }}


    // gnb menu
    $(function(){
        $('.FamilySite').on('click',function(){
            $('.gnb').toggleClass('on');
            $('.lnr').toggleClass('arrow');
        });
    })


    // 하단 gnb바 자동 숨기기

    $(window).on('scroll resize', function() {
        var scrollPos = 0;
        scrollPos = $(document).scrollTop();
        var footerTop = $('footer').offset().top;
        hideGnb();
        
            function hideGnb() {
            if (scrollPos < footerTop) { 
                $('.gnb').removeClass('on');
                $('.lnr').removeClass('arrow');
            }
            }
        });

    //   768px 이하 햄버거바
    $(function(){
        $('.menubar').on('click',function(){
            $('.menuWrap').addClass('on');
        });
        $('.closebtn').on('click',function(){
            $('.menuWrap').removeClass('on');
        });
    })

    //768px 이하 서브메뉴 접기
    $(function(){
        $('.menuWrap .text .menuBusiness').on('click',function(){
            $('.menuWrap .hideSubmenu.first').toggleClass('hide');
        });
        $('.menuWrap .text .menuCareer').on('click',function(){
            $('.menuWrap .hideSubmenu.second').toggleClass('hide');
        });
    })

    $(function(){
        $('.menuWrap .text .menuBusiness').on('click',function(){
            $('.menuWrap .text .menuBusiness').toggleClass('open');
        });
        $('.menuWrap .text .menuCareer').on('click',function(){
            $('.menuWrap .text .menuCareer').toggleClass('open');
        });
    })

