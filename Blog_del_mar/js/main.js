/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.container-fluid' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
	bodyEl.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
				console.log("se ejecuto");
			}
		} );
	}
		

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		
if(isOpen){
	isOpen=false;
}else{
	isOpen=true;
}


	}

	init();

})();


	$(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	});

	//Click event to scroll to top

	$('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	});
