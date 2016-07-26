// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    backgroundAnimation();
    // $(window).resize(function(){
    // 	backgroundAnimation();
    
    // });

	$(window).scroll(function(){
		  var scroll = $(window).scrollTop();
    
		  console.log(scroll);
		  $('#bg-animation').css({position:'absolute',top:scroll});
	});
});