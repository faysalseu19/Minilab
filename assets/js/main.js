(function ($) {
"use strict";



  /* ==========================================
  Sticky menu
  =============================================*/

  $(window).on('scroll', function (){

    var scroll = $(window).scrollTop();

    if(scroll > 30) {
      $(".header-area").addClass("sticky");
    } else{
      $(".header-area").removeClass("sticky"); 
    }
  });

  /* ==========================================
  Scroll 
  =============================================*/
  
  $('#main-menu-wrapper a').on('click', function(e){
      e.preventDefault();
      $("html, body").animate({
          scrollTop:$(this.hash).offset().top - 0
      },800);
  });

  /* ==========================================
  Navbar fix
  =============================================*/

  $(document).on( "click", ".header-area .navbar-nav li>a",
    function (e) {
      e.preventDefault();
      }
    );

    
  $(window).on("load", function () { 

    if ($("#main-menu-wrapper").length) {
      $("#main-menu-wrapper").slicknav({
        prependTo: ".mobile-menu",
      });
    }
  });


/* ==============================================
==== services-active ======
================================================= */


$('.active-carousel').owlCarousel({
	transform:false,
	margin:20,
	items:2.5,
	loop:true,
	dots:false,
});


/* ==============================
 wow js
 ============================== */

new WOW().init();

})(jQuery);	