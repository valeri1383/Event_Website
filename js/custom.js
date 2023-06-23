/**	
	Custom JS
	
	1. FIXED MENU
	2. MOBILE MENU CLOSE  
	
	
**/


(function( $ ){



	/* ----------------------------------------------------------- */
	/*  1. FIXED MENU
	/* ----------------------------------------------------------- */
	

	jQuery(window).bind('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('.mu-navbar').addClass('mu-nav-show');
        
	    } else {
	        $('.mu-navbar').removeClass('mu-nav-show');
	    }
	});


	

	/* ----------------------------------------------------------- */
	/*  2. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 

	jQuery('.mu-menu').on('click', 'li a', function() {
	  $('.mu-navbar .in').collapse('hide');
	});



	
	
})( jQuery );



  
	