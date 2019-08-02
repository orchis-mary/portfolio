$(function(){
    'use strict';
    var music = document.getElementById('music');
    var icon=0;
    var nowscroll=0;
    var home=$('#home').offset().top;
    var about=$('#about').offset().top;
    var skill=$('#skill').offset().top;
    var services=$('#services').offset().top;
    var portfolio=$('#portfolio').offset().top;
    var contact=$('#contact').offset().top;
    $('.white').hover(function(){
        if(icon==1){
        $('.fa-music').fadeIn(500);
        }
    },function(){
        $('.fa-music').fadeOut(500);
    });

    $('.white').click(function(){
        if($(this).hasClass('clicked')){
            $(this).removeClass('clicked');
            $('.fa-music').fadeIn(500);
            music.currentTime = 0;
            music.play();
            icon=1;
        }else{
            $(this).addClass('clicked');
            $('.fa-music').fadeOut(300);
            music.pause();
            icon=0;
        }

    });

    $('.mob_link').click(function(){
      $('.arlo_tm_mobile_menu_wrap').fadeOut(1000);
      $('.hamburger').removeClass('is-active');
    });


var click=0;
$('.name_holder').click(function(){
    if(click==0){
        $('.title-name').hide();
        $('.title-click').fadeIn(2000);
        click=1;
    }else{
        $('.title-click').hide();
        $('.title-name').fadeIn(2000);
        click=0;
    }
});

$('.about-img').hover(function(){
    switch(true){
        case ($(this).hasClass('birth')) :  $('#birth').animate({opacity: 1},{duration: 500});break;
        case ($(this).hasClass('address')) : $('#address').animate({opacity: 1},{duration: 500});break;
        case ($(this).hasClass('academic')) : $('#academic').animate({opacity: 1},{duration: 500});break;
        case ($(this).hasClass('hobby')) : $('#hobby').animate({opacity: 1},{duration: 500});break;
        case ($(this).hasClass('home')) :  $('#homepage').animate({opacity: 1},{duration: 500});break;
        case ($(this).hasClass('mails')) : $('#mails').animate({opacity: 1},{duration: 500});break;
        case ($(this).hasClass('tel')) : $('#tel').animate({opacity: 1},{duration: 500});break;
        case ($(this).hasClass('twi')) : $('#twi').animate({opacity: 1},{duration: 500});break;
    }
},function(){
    switch(true){
        case ($(this).hasClass('birth')) :  $('#birth').animate({opacity: 0},{duration: 500});break;
        case ($(this).hasClass('address')) : $('#address').animate({opacity: 0},{duration: 500});break;
        case ($(this).hasClass('academic')) : $('#academic').animate({opacity: 0},{duration: 500});break;
        case ($(this).hasClass('hobby')) : $('#hobby').animate({opacity: 0},{duration: 500});break;
        case ($(this).hasClass('home')) :  $('#homepage').animate({opacity: 0},{duration: 500});break;
        case ($(this).hasClass('mails')) : $('#mails').animate({opacity: 0},{duration: 500});break;
        case ($(this).hasClass('tel')) : $('#tel').animate({opacity: 0},{duration: 500});break;
        case ($(this).hasClass('twi')) : $('#twi').animate({opacity: 0},{duration: 500});break;
    }});


    $('.photos').slick({
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed:5000,
        dots: false,
        fade: true,
      });

      var secret=0;
      function mary2(){
        setTimeout(function(){
        $('.photo1').attr('src','img/mary2/mary1.jpg').css({opacity: '0'}).animate({opacity: '1'}, 1500);
            $('.photo2').attr('src','img/mary2/mary2.jpg').css({opacity: '0'}).animate({opacity: '1'}, 1500);
            $('.photo3').attr('src','img/mary2/mary3.jpg').css({opacity: '0'}).animate({opacity: '1'}, 1500);
            $('.photo4').attr('src','img/mary2/mary4.jpg').css({opacity: '0'}).animate({opacity: '1'}, 1500);
            $('.photo5').attr('src','img/mary2/mary5.jpg').css({opacity: '0'}).animate({opacity: '1'}, 1500);
            $('.photo6').attr('src','img/mary2/mary6.jpg').css({opacity: '0'}).animate({opacity: '1'}, 1500);
          },2000);
      }
      function mary1(){
        setTimeout(function(){
        $('.photo1').attr('src','img/mary/mary1.jpg').animate({opacity: '1'}, 1500);
            $('.photo2').attr('src','img/mary/mary2.jpg').animate({opacity: '1'}, 1500);
            $('.photo3').attr('src','img/mary/mary3.jpg').animate({opacity: '1'}, 1500);
            $('.photo4').attr('src','img/mary/mary4.jpg').animate({opacity: '1'}, 1500);
            $('.photo5').attr('src','img/mary/mary5.jpg').animate({opacity: '1'}, 1500);
            $('.photo6').attr('src','img/mary/mary6.jpg').animate({opacity: '1'}, 1500);
      },4000);
    }
      $('.secret').click(function(){
          if(secret>1){
            $('.arlo_tm_about_wrapper_all').removeClass('element');
            $('.arlo_tm_about_wrapper_all').addClass('danger');
            mary2();
            secret++;
          }else{
          $('.arlo_tm_about_wrapper_all').addClass('element');
          $('.photo1').attr('src','img/mary/mary7.jpg');
          secret++;
      }});
      $('.photo').click(function(){
          music.pause()
          music.currentTime=0;
          $('html').css({overflow: 'hidden'});
          $('.arlo_tm_totop.opened').css({visibility: 'hidden'});
          $('.video-wrapper').show();
          if(secret>1){
            $('.video1')[0].src="video/mary2.mp4";
            $('.video1')[0].play();
            mary1();
            $('.arlo_tm_about_wrapper_all').removeClass('danger element');
          }else{
          $('.video1')[0].play();
        }
      });

        $(document).on('click',function(e){
            if(!$(e.target).closest('.video1').length && !$(e.target).closest('.photos').length && !$(e.target).closest('.secret').length){
        $('.video-wrapper').hide();
        $('html').css({overflow: 'auto'});
        $('.arlo_tm_totop.opened').css({visibility: 'visible'});
        $('.video1')[0].pause()
        $('.video1')[0].currentTime=0;
            }});

        $('.lang').click(function(){
          if($(this).hasClass('click')){
            $(this).removeClass('click');
          }else{
          $(this).addClass('click');
          }
        });

        $('.skill').hover(function(){
            $(this).find('.skill-d').addClass('active');
          },function(){
          $(this).find('.skill-d').removeClass('active');
        });
        $('.port1').click(function(){
          window.open($(this).attr('data-url'), '_blank');
        return false;
      });
        $('.port2').click(function(){
          window.open($(this).attr('data-url'), '_blank');
        return false;
      });

      $(window).on('load scroll', function(){

  $('.animated').each(function () {

    var isAnimate = $(this).data('animate');
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if(scrollPos > elemOffset - wh + (wh / 2)){
      $(this).addClass(isAnimate);
    }else{
      $(this).removeClass(isAnimate);
    }
});
});

$('.svg').on('click', function(){

  var animationName = $('.svg').data('animate');

  $(this).addClass(animationName).delay(1000).queue(function(next){
    $(this).removeClass(animationName);
    next();
  });
});

$('.svg').animateCssPlus({
      scroll:false,
      click:true,
      class:'flip'
    });
  $(window).on('load scroll',function(){
    nowscroll=$(this).scrollTop();
  if(nowscroll >= about-150){
    $('.arlo_tm_leftpart_wrap').addClass('scroll');
  }else{
    $('.arlo_tm_leftpart_wrap').removeClass('scroll');
  }
});
  $(window).on('load scroll',function(){
    nowscroll=$(this).scrollTop();
  if(nowscroll >= home && nowscroll< about){
    $('.home-link').attr('id','scrollchange');
  }else{
    $('.home-link').attr('id','');
  }
  if(nowscroll >= about && nowscroll< 1448){
    $('.about-link').attr('id','scrollchange');
  }else{
    $('.about-link').attr('id','');
  }
  if(nowscroll >= 1448 && nowscroll< 2448){
    $('.skill-link').attr('id','scrollchange');
  }else{
    $('.skill-link').attr('id','');
  }

  if(nowscroll >= 2448 && nowscroll< 3148){
    $('.services-link').attr('id','scrollchange');
  }else{
    $('.services-link').attr('id','');
  }
  if(nowscroll >= 3148 && nowscroll< 4048){
    $('.portfolio-link').attr('id','scrollchange');
  }else{
    $('.portfolio-link').attr('id','');
  }
  if(nowscroll >= 4048){
    $('.contact-link').attr('id','scrollchange');
  }else{
    $('.contact-link').attr('id','');
  }
});
});
