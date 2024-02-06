(function($) {
  "use strict";

  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $('.header-area').addClass('sticky')
    } else{
        $('.header-area').removeClass('sticky')
    }
});
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

 // Modal 
  $('.locationModal ul a').click( function (){ 
    $('.locationModal').fadeOut(800) 
    $('.locationModalBg').fadeOut(1000) 
  }); 


  // owlCarousel
  $(".hero__slider").owlCarousel({
    loop: true,
    margin: 30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true
  });


  // owlCarousel
  $(".awards__slider").owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 5
      }
    }
  });

  // owlCarousel
  $(".Test__slider").owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    rtl: true,
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });



  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
  $('.select__blk select').niceSelect();
})(jQuery);
