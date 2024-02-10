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


  // Slider of here
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
 
  // Awards slider
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

  // Test slider
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

  // Initial custom select
  $('.select__blk select').niceSelect();

  // Select Items to search
  function SelectItem() {

    // $('.select_btn.all_btn').click(()=>{
    //   const Btns = document.querySelectorAll('.select_item.top_items .select_btn')
    //   Btns.forEach(btn => {
    //     btn.classList.remove('active')
    //   }) 
    //   $(this).addClass('active')
    //   const AllItems = document.querySelectorAll('.MenusAllItems > div') 
    //   AllItems.forEach(item => {
    //     item.style.display = "block"
    //   }) 
    // })

    $('.select_box button').click(function(e) {
      if (e.target.classList.contains('all_btn')) {
        const Btns = document.querySelectorAll('.select_item.top_items .select_btn')
        Btns.forEach(btn => {
          btn.classList.remove('active')
        }) 
        $(this).addClass('active')
        const AllItems = document.querySelectorAll('.MenusAllItems > div') 
        AllItems.forEach(item => {
          item.style.display = "block"
        }) 
      }else{
        
        $(this).toggleClass('active')
        const Btns = document.querySelectorAll('.select_item.top_items .select_btn')
        const AllTheActiveItems = document.querySelectorAll('.select_item .select_btn.active')
        const AllItems = document.querySelectorAll('.MenusAllItems > div') 
        let activeMenuVals = []

        if (AllTheActiveItems.length > 1) {
          Btns[0].classList.remove('active')
        } 
        
        AllTheActiveItems.forEach(aTm => {
          activeMenuVals.push(aTm.dataset.value)
        }) 
  

        AllItems.forEach(item => {
          if (activeMenuVals.length > 0) { 
            let Availble = false ;
            activeMenuVals.forEach(mVal => {
              if (item.dataset.item === mVal) {
                Availble = true
              }
            })
  
            if (Availble) { 
              item.style.display = "block"
            }else{
              item.style.display = "none" 
            }
          }else{
            item.style.display = "block"
            Btns[0].classList.add('active')
          }

 
          
        }) 

      }




        
    })
  }
  SelectItem()
  



  // Location Modal funcs 
  function LocationModal() {
    $('.ui.dropdown').dropdown(); 

    const LocalStorage = localStorage.getItem('locat')
    if (!LocalStorage) { 

      $('.locationModal').removeClass('d-none') 
      $('.locationModalBg').removeClass('d-none')

      // Modal 
      $('.locationModal ul a,.dropdown .menu .item').click( function (e){  
        localStorage.setItem('locat', `${e.target.dataset.value}`)
        $('.locationModal').fadeOut(500) 
        $('.locationModalBg').fadeOut(700)  
      });  
    }
 
  }
  LocationModal()
 





})(jQuery);
