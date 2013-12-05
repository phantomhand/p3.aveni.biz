$(document).ready(function() {

	/* Array for looping */
	var song = Array();
	
	/* set Recording status to false by default */ 
	var recording = false;
	
	/* Event listener for record button */	
	$('#record').click(function(){
		recording = true;
	});
	
	/* Event listener for pad selection */
	$('.pad').click(function(){
		var pressed = (event.target.id+'-note')
		
		document.getElementById(pressed).play();
		
		/* Recording function */
		if (recording == true) {
			song.push(event.target.id+'-note');
		} 
		
		/* Event listener for stop button */	
		$('#stop').click(function(){
			recording = false;
		});
		
		/* Event listener for play button */	
		$('#stop').click(function(){
			recording = false;
		});
				
	});
	
});