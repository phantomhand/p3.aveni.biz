$(document).ready(function() {

//=========
//! Array
//=========

	// Array for looping
	var song = Array();
	
	// set Recording status to false by default 
	var recording = false;
	
	// Set variable to track position in 'song' array, set it to 0
	var note = 0;
	
	var tempo;
	
	
	/* Play and Loop the Array */

	// Play through the array from the beginning 
	function play_array() {
		
		// If 'song' length is 0, do nothing
		if (song.length == 0){ 
			return false;
		}
	
		if (note >= song.length) {
			note = 0;
		}
		
		document.getElementById(song[note] + "-note").play();
		
		// Light up the button
		$('#' + song[note]).css('opacity',1);
		console.log("note is:" + song[note]);
		
		// Return to dim
		setTimeout(function() {
		$('.pad').css('opacity',.85);},300);
		
		
		//Add 1 to 'note' to check next position in the array for a the presence of value
		note++;
	}
	
//===========
// Buttons
//===========


	// Event listener for record button	
	$('#record').click(function(){
		recording = true;
		console.log('Recording = ' + recording);
	});
	
	// Event listener for play button	
	$('#play').click(function(){
		recording = false;
		
		// Start the tempo for playback
		tempo = setInterval(play_array,600);
		
		// Display the 'song' array 
		console.log(song);
		
	});
	
	// Event listener for stop button	
	$('#stop').click(function(){
		recording = false;
		
		clearInterval(tempo);
		
		console.log(song);
		console.log('Stopped. Recording = ' + recording);
	});
	
	// Event listener for reset button	
	$('#reset').click(function(){
		song.length = 0;
		console.log(song);
	});
	
	// Event listener for pad selection audio
	$('.pad').click(function(){
		var pressed = (event.target.id)
			
		document.getElementById(pressed + "-note").play();
		
		// Light up the button
		$(this).css('opacity',1);
		
		// Return to dim
		setTimeout(function() {
		$('.pad').css('opacity',.85);},300);
		
		// Recording function 
		if (recording == true) {
			song.push(pressed);
			console.log('song = ' + song);
		} 
				
	});
	
});