
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
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 10;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });
	/*====================================
    top -menu
    ======================================*/
$('#Primary-menu.navbar-default li:has(ul), #Secondary-menu.navbar-default li:has(ul)').addClass('menu-item-has-children');
$('.grid').isotope({
  itemSelector: '.grid-item',
 masonryHorizontal: {
    rowHeight: 110
  }
});
/*====================================
    text center
    ======================================*/	
	$(".carousel").swipe({
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll:"vertical"
});
$(window).resize(function(){
 $('#home-banner-block .carousel-caption').css({
	 left: ($(window).width() - $('#home-banner-block .carousel-caption').outerWidth())/0,
        top: ($(window).height() - $('#home-banner-block .carousel-caption ').outerHeight())/4
    });
 $('#inner-banner .content').css({
	 left: ($(window).width() - $('#inner-banner .content').outerWidth())/0,
        top: ($(window).height() - $('#inner-banner .content ').outerHeight())/3
    });	
	 $('#home-body-block .overlay-header.has-long article header.entry-header h3 ').css({
		 position:'relative',
	 //left: ($(window).width() - $('#home-banner-block .carousel-caption').outerWidth())/0,
        top: ($(window).height() - $('#home-body-block .overlay-header.has-long article header.entry-header h3 ').outerHeight())/6
    });
});
// To initially run the function:
$(window).resize();
/*creating click event*/
$(document).ready(function(){
 $("#author-slide").owlCarousel({ 	 
  	     navigation : true, // Show next and prev buttons
		 navigationText : ["", ""],
        slideSpeed : 300,
        paginationSpeed : 400,
		 pagination:false,
        singleItem:true
  	  });  
});
}());
}
main();