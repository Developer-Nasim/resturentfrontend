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



  // all the carousels initilized here
  function AllCarousels() { 
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
  }
  AllCarousels()


  // Initial custom select
  $('.select__blk select').niceSelect();


  
  // Show total available items
  function showTotalMenus() {
    const total_items = document.querySelectorAll('.item-title span')
    if (total_items.length > 0) {
      const total = document.querySelectorAll('.menuItem__wrp > div').length
      total_items[0].innerHTML = total
    }
  }


  // Select Items to search
  function SelectItem() {

    showTotalMenus()

    const find_multifiltaring_area = document.querySelectorAll('.multiple_area_filtaring')
    const total_items = document.querySelector('.item-title span')
    

    if (find_multifiltaring_area.length > 0) {
        
      $('.select_box button').click(function(e) {
        $(this).toggleClass('active') 

        const AllTheBtns = document.querySelectorAll('.select_item .select_btn')
        const AllBtn = document.querySelector('.select_item.top_items .select_btn.all_btn')
        const Btns = document.querySelectorAll('.select_item.top_items .select_btn')
        const ActiveBtns = document.querySelectorAll('.select_item.top_items .select_btn.active')
        const BottomActiveBtns = document.querySelectorAll('.select_bottom_item .select_btn.active')
        const MenuItems = document.querySelectorAll('.menuItem__wrp > div')

        let the_items = [];
        let the_inner_items = [];

        if (e.target.classList.contains('all_btn')) {
          AllTheBtns.forEach(btn => {
            btn.classList.remove('active')
          })
          $(this).addClass('active')

          MenuItems.forEach(item => {
            item.style.display = "flex"
          })

          showTotalMenus()
          
        }else{
 
      
          if (ActiveBtns.length > 0) {
            if (ActiveBtns.length === 1 && ActiveBtns[0].classList.contains('all_btn')) {
              Btns.forEach(btn => {
                the_items.push(btn.dataset.value)
              });
            }else{ 
              ActiveBtns.forEach(btn => {
                the_items.push(btn.dataset.value)
              });
            }
          }else{
            Btns.forEach(btn => {
              the_items.push(btn.dataset.value)
            });
          }
 

          BottomActiveBtns.forEach(btn => {
            the_inner_items.push(btn.dataset.value)
          });


          MenuItems.forEach(item => { 
            let isIt = false
            the_items.forEach(selected_item => {
              if (item.dataset.item === selected_item) {
                if (the_inner_items.length > 0) {
                  let isItInner = true
                  the_inner_items.forEach(iis => {
                    if (!item.classList.contains(iis)) {
                      isItInner = false
                    }
                  })
                  isIt = isItInner; 
                }else{
                  isIt = true; 
                }
              }
            })
            if (isIt) {
              item.style.display = "flex"
              item.classList.add('showed')//this class to count total amount of found menus
            }else{
              item.style.display = "none"
              item.classList.remove('showed') //this class to count total amount of found menus
            }

          })
 
          if (ActiveBtns.length > 1) {
            AllBtn.classList.remove('active')
          }

          // Show total available items
          total_items.innerHTML = document.querySelectorAll('.menuItem__wrp .showed').length

        }
        
      })

 

    }else{
      $('.select_box button').click(function(e) {
        $(this).toggleClass('active') 
 
        const Btns = document.querySelectorAll('.select_item .select_btn.active')
        const MenuItems = document.querySelectorAll('.menuItem__wrp > div')

        let the_items = []; 
        Btns.forEach(btn => {
          the_items.push(btn.dataset.value)
        });

        console.log(the_items)
        MenuItems.forEach(item => {
          if (the_items.length > 0) { 
            let isIt = false
            the_items.forEach(selected_item => {
              if (item.dataset.item === selected_item) {
                isIt = true
              }
            })
            if (isIt) {
              item.style.display = "flex"
              item.classList.add('showed')//this class to count total amount of found menus
            }else{
              item.style.display = "none"
              item.classList.remove('showed') //this class to count total amount of found menus
            }
          }else{
            item.style.display = "flex"
            item.classList.add('showed')//this class to count total amount of found menus
          }
        })


        // Show total available items
        total_items.innerHTML = document.querySelectorAll('.menuItem__wrp .showed').length
 
        
      })
    }



  }
  SelectItem()
  



  // Location Modal funcs 
  function LocationModal() {
    $('.ui.dropdown').dropdown(); 

    const LocatStored = sessionStorage.getItem('locat')
    if (!LocatStored) { 

      $('.locationModal').removeClass('d-none') 
      $('.locationModalBg').removeClass('d-none')

      // Modal 
      $('.locationModal ul a, .locationModal .dropdown .menu .item').click( function (e){  
        sessionStorage.setItem('locat', `${e.target.dataset.value}`)
        $('.locationModal').fadeOut(500) 
        $('.locationModalBg').fadeOut(700)  
      });  
    }
 
  }
  LocationModal()
 





})(jQuery);
