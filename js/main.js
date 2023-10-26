$(function () {

  //window scroll 부드럽게
  class Scrooth {
    constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
      this.element = element;
      this.distance = strength;
      this.acceleration = acceleration;
      this.deceleration = deceleration;
      this.running = false;
  
      this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
      this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
      this.scroll = this.scroll.bind(this);
    }
  
    scrollHandler(e) {
      e.preventDefault();
  
      if (!this.running) {
        this.top = this.element.pageYOffset || this.element.scrollTop || 0;
        this.running = true;
        this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
        this.isDistanceAsc = true;
        this.scroll();
      } else {
        this.isDistanceAsc = false;
        this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
      }
    }
  
    scroll() {
      if (this.running) {
        this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
        Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
        Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
  
        this.top += this.currentDistance;
        this.element.scrollTo(0, this.top);
        
        requestAnimationFrame(this.scroll);
      }
    }
  }
  
  const scroll = new Scrooth({
    element: window,
    strength: 20, //스크롤 한번에 이동하는 거리
    acceleration: 1.75,
    deceleration: .875,
  });

  //.port 스와이퍼 슬라이드
  var swiper = new Swiper(".swiper01", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //.design 스와이퍼 슬라이드
  var swiper = new Swiper(".swiper02", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 0, //add
    },
    speed: 8000,
    loop: true,
    loopAdditionalSlides: 1,
  });
  
  //scroll
  $(window).scroll(function () {
    //up버튼
    let mainTop = $('.main_visual').offset().top;
    if (mainTop < $(window).scrollTop()) {
        $('.up_btn').fadeIn().css({'display' : 'flex'});
    } else {
        $('.up_btn').fadeOut();
    }
    //intro
    let introTop = 400;
    if (introTop < $(window).scrollTop()) {
      $('.intro .item>div').css({
        'opacity' : 1,
      });
    } else {
      $('.intro .item>div').css({
        'opacity' : 0,
      });
    }
    //port
    let portTop = 1300;
    if (portTop < $(window).scrollTop()) {
      $('.port .swiper').css({
        'opacity' : 1,
      });
    }else {
      $('.port .swiper').css({
        'opacity' : 0,
      });
    }
    //react
    let reactTop = 2200;
    if (reactTop < $(window).scrollTop()) {
      $('.react .list .item:first-child').css({
        'opacity' : 1,
      });
      $('.react .list .item:last-child').css({
        'opacity' : 1,
      });
    } else {
      $('.react .list .item:first-child').css({
        'opacity' : 0,
      });
      $('.react .list .item:last-child').css({
        'opacity' : 0,
      });
    }
    //disign
    let designTop = 3100;
    if (designTop < $(window).scrollTop()) {
      $('.disign .title').css({
        'opacity' : 1,
      });
      $('.disign .list').css({
        'opacity' : 1,
      });
    } else {
      $('.disign .title').css({
        'opacity' : 0,
      });
      $('.disign .list').css({
        'opacity' : 0,
      });
    }
  });//$(window).scroll

  //up버튼
  $('.up_btn').click(function(){
    $('html, body').animate({
      scrollTop: 0,
    },2000);
    return false;
  });

  //섹션이동버튼
  $('.side_btn .nav_btn li:nth-child(1)').click(function(){
    $('html, body').stop().animate({
      scrollTop: 0,
    },2000);
    return false;
  });
  $('.side_btn .nav_btn li:nth-child(2)').click(function(){
    $('html, body').stop().animate({
      scrollTop: 963,
    },2000);
    return false;
  });
  $('.side_btn .nav_btn li:nth-child(3)').click(function(){
    $('html, body').stop().animate({
      scrollTop: 1926,
    },2000);
    return false;
  });
  $('.side_btn .nav_btn li:nth-child(4)').click(function(){
    $('html, body').stop().animate({
      scrollTop: 2889,
    },2000);
    return false;
  });
  $('.side_btn .nav_btn li:nth-child(5)').click(function(){
    $('html, body').stop().animate({
      scrollTop: 3852,
    },2000);
    return false;
  });

  //테마버튼
  let thema = $('.thema_btn');
 
  thema.click(function () {

    if(thema.css('border-color') == 'rgb(124, 239, 136)') {

      $(this).css({
        'border-color' : '#ffcdcd',
      })
  
      $('body').addClass('on');

      $('.title01 img,.img_box img,.port .swiper .swiper-slide .swiper_r .title .port_svg img,.side_btn .nav_btn li img').attr('src','img/star_g.png');
      $('.use01 .top li:nth-child(1) img').attr('src','img/icon01_g.png');
      $('.use01 .top li:nth-child(2) img').attr('src','img/icon02_g.png');
      $('.use01 .top li:nth-child(3) img').attr('src','img/icon03_g.png');
      $('.use01 .top li:nth-child(4) img').attr('src','img/icon04_g.png');
      $('.use01 .top li:nth-child(5) img').attr('src','img/icon05_g.png');
      $('.use01 .bottom li:nth-child(1) img').attr('src','img/icon06_g.png');
      $('.use01 .bottom li:nth-child(2) img').attr('src','img/icon07_g.png');
      $('.use01 .bottom li:nth-child(3) img').attr('src','img/icon08_g.png');
      $('.use01 .bottom li:nth-child(4) img').attr('src','img/icon09_g.png');
      $('.use01 .bottom li:nth-child(5) img').attr('src','img/icon10_g.png');
      $('.use01 .bottom li:nth-child(6) img').attr('src','img/icon11_g.png');;

    }else {
      $(this).css({
        'border-color' : '#7cef88',
      })

      $('body').removeClass('on');

      $('.title01 img,.img_box img,.port .swiper .swiper-slide .swiper_r .title .port_svg img,.side_btn .nav_btn li img').attr('src','img/star01.png');
      $('.use01 .top li:nth-child(1) img').attr('src','img/icon01.png');
      $('.use01 .top li:nth-child(2) img').attr('src','img/icon02.png');
      $('.use01 .top li:nth-child(3) img').attr('src','img/icon03.png');
      $('.use01 .top li:nth-child(4) img').attr('src','img/icon04.png');
      $('.use01 .top li:nth-child(5) img').attr('src','img/icon05.png');
      $('.use01 .bottom li:nth-child(1) img').attr('src','img/icon06.png');
      $('.use01 .bottom li:nth-child(2) img').attr('src','img/icon07.png');
      $('.use01 .bottom li:nth-child(3) img').attr('src','img/icon08.png');
      $('.use01 .bottom li:nth-child(4) img').attr('src','img/icon09.png');
      $('.use01 .bottom li:nth-child(5) img').attr('src','img/icon10.png');
      $('.use01 .bottom li:nth-child(6) img').attr('src','img/icon11.png');
    }
    
  });//thema.click end

  //use01 .mouseenter()
  $('.use01 li img').mouseenter(function(){
    $('.use01 h5').text($(this).attr('alt'));
  });

});//jquery end