$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


	// jQuery Events Challenges 0
	$("p").click(function() {
 		$(this).css('background-color', 'red');
	});
	
	$("h2").hover(function() {
 		$("h2").css('background-color', 'lightblue');
	});
	
	$("h2").hover(function() {
 		$(this).css('font-size', '50px');
	});
	
	$(".bottom_button").mouseenter(function() {
 		$("body").css('background-color', 'black');
	});
	
	$(".bottom_button").mouseleave(function() {
 		$("body").css('background-color', 'grey');
	});

	
	// jQuery Events Challenges 1
	$("#button1").click(function(){
            $('#button1').hide('slow');
    });
	
	
	// jQuery Events Challenges 2 + 3
	$(".bottom_button").click(function(){
            $(this).siblings('p').slideToggle ('slow');
    });
	
	
	// jQuery Events Challenges 4
	$(".bottom_button").mouseenter(function() {
 		$(this).fadeTo('slow', 0.5);
	});
	
	$(".bottom_button").mouseleave(function() {
 		$(this).fadeTo('slow', 1);
	});
	
}); 
