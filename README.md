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

My original idea for P3 was to create a step-sequencer/drum machine in JavaScript. I imagined this being built as a grid of divs with an underlying array of sounds which would be triggered when clicked by the user. After some work on it, I realized this was more complicated than I had originally thought, and I decided to scale back to something more within my comprehension level for P3, and leave the drum machine for a future project.

While I considered other possible projects, I rebuilt the Card-O-Matic class exercise into an invitation-maker for an annual Christmas Special Party for which I design a cartoon-ish illustrated flyer each year (examples at http://aveni.biz/csp-invite/previous/). I learned a lot while doing this; adding and changing features from the class exercise was a good way to get more familiar working with event listeners. The results are here: http://aveni.biz/csp-invite/.

Around this same time, I bought an old Tandy-12 game on eBay for $1. The device has a cool "songwriter" function, which lets you record a pattern, loop it, and then play over it. I enjoyed playing with this feature, so I decided I'd like to recreate it in JavaScript as my P3 project.

Initially, I began building this using Audiolet, a JS library for audio synthesis, to generate the game sounds. The first few commits in my GitHub repo use Audiolet for the sound generator. I did get it to make sound but, again, opted to focus on the immediate goals of the project and come back to experimenting with Audiolet later. Instead, I recorded samples of the Tandy-12 and made .wav files to use as the sounds of the game on the site.

In retrospect, I'm glad I went with this for my project Ð it has a lot of elements in common with my original drum machine idea: it works with audio, lets the user define a pattern, play it back as a loop, and add to it dynamically, and is implemented using some of the same methods I imagined I'd use in the drum machine (e.g. an array of sounds, the setInterval function, etc.).

With this project under my belt, I feel better equipped for exploring slightly more advanced projects and libraries in the future.

--

NOTE RE: COMMITS AFTER DEADLINE Ð Since submitting the project, I've made a couple commits to change non-function-related details. Specifically:

1) I added an image found on Wikimedia Commons to the Wikipedia article about the game, and updated the external link on this site to point to that, as it has better info than the previous source I was linking to.

2) I changed the background color slightly.

3) I added a "+" and "-" symbol next to the word INSTRUCTIONS. I was playing with this idea on my local site and it got committed along with the link update mentioned above. I noticed it when I pulled the changes to the live version of the site. Now that it's there, I decided I like it, so I've left it up there.

