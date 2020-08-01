
$(document).ready(function() {
    $(window).on("scroll",function() {
        var dist = $(this).scrollTop();
        if(dist>50) {
            $(".navbar").addClass("f-top");
            $(".navbar li a").css("color","black");
        } else {
            $(".navbar").removeClass("f-top");
            $(".navbar li a").css("color","white");
        }
    })
    var imageSlider = new Swiper('.image-slider', {
        autoplay: {
              delay: 2000,
          disableOnInteraction: false
          },
         loop: true,
         spaceBetween: 30,
         slidesPerView: 5,
         breakpoints: {
             580: {
                 slidesPerView: 1,
                 spaceBetween: 10
             },
             768: {
                  slidesPerView: 2,
                  spaceBetween: 20
              },
             992: {
                 slidesPerView: 3,
                 spaceBetween: 20
             },
             1200: {
                 slidesPerView: 4,
                 spaceBetween: 20
              },
          }
      }
      );
      $(".navbar ul li a").on("click",function() {
        var target = $(this).attr("href");
        // console.log(target);
          var linked = target.split('php');
          var result = linked[1];
          $("html, body").animate({
            scrollTop: $(result).offset().top
        },900)
      })
    $(".navbar-toggler").click(function () {
        $(".navbar ul li a").css("color","black");
        $("header").css("margin",0);
    })


})

