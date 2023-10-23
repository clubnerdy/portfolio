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
    } //window scroll 부드럽게 end
  
  const scroll = new Scrooth({
    element: window,
    strength: 33, //스크롤 한번에 이동하는 거리
    acceleration: 1.75,
    deceleration: .875,
  });

    $(window).scroll(function () {
        //up버튼
        let mainTop = $('.sns_wrap').offset().top;
        if (mainTop < $(window).scrollTop()) {
            $('.side_btn').fadeIn().css({'display' : 'flex'});
        } else {
            $('.side_btn').fadeOut();
        }
    });//scroll 이벤트

    //스와이퍼 슬라이드
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

    //up버튼
    $('.side_btn').click(function(){
        $('html, body').animate({
        scrollTop: 0,
        },400);
        return false;
    });

});//jquery end