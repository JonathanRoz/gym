$(".banner-slide").slick({
arrows:false,
dots:true,
autoplay: true,
autoplaySpeed: 2000,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }

    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left pr"></i>',
        nextArrow:'<i class="fas fa-chevron-right nex"></i>'
      }
      
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left pr"></i>',
        nextArrow:'<i class="fas fa-chevron-right nex"></i>'
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left pr"></i>',
        nextArrow:'<i class="fas fa-chevron-right nex"></i>'
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]








})






$('.venobox').venobox(); 






$(".man-sliderr").slick({
    arrows:false,
    dots:true,
    slidesToShow: 1,
    asNavFor:".woman-sliderr",
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
            arrows:true,
            prevArrow:'<i class="fas fa-chevron-left prv"></i>',
            nextArrow:'<i class="fas fa-chevron-right net"></i>',
            autoplay: false,

          }
          
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
            arrows:true,
            prevArrow:'<i class="fas fa-chevron-left prv"></i>',
            nextArrow:'<i class="fas fa-chevron-right net"></i>'
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
            arrows:true,
            prevArrow:'<i class="fas fa-chevron-left prv"></i>',
            nextArrow:'<i class="fas fa-chevron-right net"></i>'
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    })

    $(".woman-sliderr").slick({
        arrows:false,
        dots:false,
        asNavFor:".man-sliderr",
        slidesToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        slideToScroll:1,
        })





    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $("#colorful").colorfulTab();  


    $(".sponser").slick({
        arrows:true,
        slidesToShow: 4,
        prevArrow:'<i class="fas fa-chevron-left prev"></i>',
        nextArrow:'<i class="fas fa-chevron-right next"></i>',


        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            dots:false,
    
              }
              
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

})