
jQuery(function($) { // DOM is now read and ready to be manipulated
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.eq-blocks');
});

$(window).resize(function(){
  equalheight('.eq-blocks');
});
});
function main() {
(function () {
   'use strict';
    /*====================================
    Show Menu on Book
    ======================================*/
    jQuery(window).bind('scroll', function() {
        var navHeight = jQuery(window).height() - 700;
        if (jQuery(window).scrollTop() > navHeight) {
            jQuery('#Primary-menu .navbar-toggler, #Primary-menu .navbar-collapse').addClass('on');
        } else {
            jQuery('#Primary-menu .navbar-toggler, #Primary-menu .navbar-collapse ').removeClass('on');
        }
    });
	/*====================================
    top -menu
    ======================================*/
jQuery('#Primary-menu.navbar-default li:has(ul), #Secondary-menu.navbar-default li:has(ul)').addClass('menu-item-has-children');
jQuery('.grid').isotope({
  itemSelector: '.grid-item',
 masonryHorizontal: {
    rowHeight: 110
  }
});

jQuery('#Secondary-menu ul li, #Primary-menu ul li').mouseenter(function() {
  //make sure menu does not fly off the right of the screen
  if (jQuery(this).children('ul').offset().left + 200 > $(window).width()) {       
    jQuery(this).children('ul').css('left', -225);          
  } 
});

/*====================================
    text center
    ======================================*/	
	jQuery(".carousel").swipe({
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') jQuery(this).carousel('next');
    if (direction == 'right') jQuery(this).carousel('prev');
  },
  allowPageScroll:"vertical"
});
jQuery(window).resize(function(){
 jQuery('#home-banner-block .carousel-caption').css({
	 left: (jQuery(window).width() - jQuery('#home-banner-block .carousel-caption').outerWidth())/0,
        top: (jQuery(window).height() - jQuery('#home-banner-block .carousel-caption ').outerHeight())/4
    });
 jQuery('#inner-banner .content').css({
	 left: (jQuery(window).width() - jQuery('#inner-banner .content').outerWidth())/0,
        top: (jQuery(window).height() - jQuery('#inner-banner .content ').outerHeight())/3
    });	
	 
});
// To initially run the function:
jQuery(window).resize();
/*creating click event*/
jQuery(document).ready(function(){
 jQuery("#author-slide").owlCarousel({ 	 
  	     navigation : true, // Show next and prev buttons
		 navigationText : ["", ""],
        slideSpeed : 300,
        paginationSpeed : 400,
		 pagination:false,
        singleItem:true
  	  });  


jQuery("#second-banner-slide").owlCarousel({ 	 
  	     navigation : true, // Show next and prev buttons
		 navigationText : ["NEXT", "PREV"],
        slideSpeed : 1000,
        paginationSpeed : 4000,
		autoPlay : true,
		 pagination:false,
		  itemsCustom : [
				        [0, 1],
				        [450, 1],
				        [600, 1],
				        [700, 1],
				        [1000, 2],
				        [1200, 2],
				        [1400, 3],
				        [1600, 3]
				      ]

  	  });  
});


}());
}
main();