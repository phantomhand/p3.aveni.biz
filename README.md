p3.aveni.biz
============

CSCI E-15 - P3 

TANDY-12 COMPUTERIZED ARCADE SIMULATOR

This project recreates the ORGAN and SONG WRITER game modes of the TANDY-12, a computerized electronic toy sold at Radio Shack stores in the 1980s.

INSTRUCTIONS

To play in ORGAN mode, simply press the colored pads to play a tune.

To activate SONG WRITER mode, press the record button at the bottom of the game. Then, play the pads to write your song. When you are done with your song, press PLAY to hear it played back in a loop. To stop the playback, press STOP. To clear the song and start again, press RESET.

For added enjoyment, try making a song and then playing more notes on top. Then, during playback, try hitting RECORD again to add notes to the loop.

Experiment and have fun!

NOTE: This site works best in Chrome, Firefox, or Safari

--

PROJECT HISTORY

My original idea for P3 was to create a step-sequencer/drum machine in JavaScript. I imagined this being built as a series of divs with an underlying array of sounds which would be triggered when clicked by the user. After some work, I realized this was more complicated than I had originally thought, and I decided to leave it for a future project and to do something more within my comprehension level for P3.

While I thought about other project ideas, I spent a weekend rebuilding the Card-O-Matic class exercise into a make-your-own invitation to my annual Christmas Special Party, for which I design a cartoon-ish illustrated flyer each year (see past examples at http://aveni.biz/csp-invite/previous/). I added and changed some things from class exercise, and learned a lot while doing this, including getting better acquainted with event listeners. The result of that work is here: http://aveni.biz/csp-invite/.

Around this same time, I purchased a vintage Tandy-12 game on eBay for $1. I had seen one a few months earlier in a thrift store and later wished I had picked up because of the cool looping function it has, whereby you can record a pattern, loop it, and then play over it. When I got the game I enjoyed playing with this feature, and so I decided to recreate it in JavaScript for my project.

Initially, I began building the project to generate the game sounds using Audiolet, a JS library for audio synthesis. The first few commits in my GitHub repo use Audiolet for the sound generator, and I did get it to make sound but, again, I quickly realized that I did not have enough experience in JavaScript to successfully use this library to do all the things I wanted the game to do. So, I recorded samples of the T-12 and made .wav files to make the sounds.

I'm glad that I settled on this game for my project Ð it has a lot of elements in common with my original drum machine idea: it works with audio, lets the user define a pattern, play it back as a loop, and add to it dynamically, and it uses many of the same methods I imagined I'd use in the drum machine (e.g. an array of sounds, the setInterval function, etc.).

With this project under my belt, I feel more confident about exploring more ambitious ideas, and other interesting tools like Audiolet and other audio systems, like the Web Audio API, sometime in the future.



