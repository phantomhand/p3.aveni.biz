$(document).ready(function() {

	// Array for looping
	var song = Array();
	
	// set Recording status to false by default 
	var recording = false;
	
	// Event listener for record button	
	$('#record').click(function(){
		recording = true;
	});
	
	// Event listener for pad selection audio
	$('.pad').click(function(){
		var pressed = (event.target.id+'-note')
		
		document.getElementById(pressed).play();
		
		// Light up the button
		$('.pad').css('opacity',1);
		
		// Return to dim
		setTimeout(function() {
		$('.pad').css('opacity',.85);
		},300);
		
		// Recording function 
		if (recording == true) {
			song.push(pressed);
			console.log(song);
		} 
		
		// Event listener for play button	
		$('#play').click(function(){
			for (var i=0; i < song.length; i++){	
				document.getElementById(song[i]).play();
			}
		});
		
		// Event listener for stop button	
		$('#stop').click(function(){
			recording = false;
			console.log(song);
		});
		
		// Event listener for reset button	
		$('#reset').click(function(){
			song.length = 0;
			console.log(song);
			console.log('cats');
		});
		
		// Start the tempo for playback
		//timer = setInterval(playback_function,500);
				
	});
	
});