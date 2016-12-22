/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "IDG Clone Wars Roleplay";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
// var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/clone.jpg",
	"backgrounds/images/cody.jpg",
	"backgrounds/images/commando.jpg",
	"backgrounds/images/wolffe.jpg",
	"backgrounds/images/501st.jpg",
	"backgrounds/images/aim.jpg",
	"backgrounds/images/alone.jpg",
	"backgrounds/images/boss.jpg",
	"backgrounds/images/clones.jpg",
	"backgrounds/images/fight.jpg",
	"backgrounds/images/kashyyyk.jpg",
	"backgrounds/images/mqdefault.jpg",
	"backgrounds/images/officer.jpg",
	"backgrounds/images/rex.jpg",
	"backgrounds/images/war.jpg",
	"backgrounds/images/yoda2.jpg",
	"backgrounds/images/yoda.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "IluRBvnYMoY", name: "Daft Punk - Give Life Back To Music"},
	{youtube: "cuj__JnGWLg", name: "Daft Punk - Within"},
	{youtube: "sOS9aOIXPEk", name: "Daft Punk - Something About Us"},
	{youtube: "dKJfJMMsqX4", name: "Daft Punk - Face To Face"},
	{youtube: "Q3Bp1QVVieM", name: "Daft Punk - Lose Yourself To Dance"},
	{youtube: "_ScM9pKlCfo", name: "Daft Punk - Fragments Of Time"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"IDG | Don't Ask What It Stands For ;)",
"Welcome To Our Server! We Hope You Have Fun",
"Hope You're Enjoying The Music!",
"We've Got Quite Alot Of Addons...",
"http://steamcommunity.com/sharedfiles/filedetails/?id=787847551",
"Mctvam Is Our Owner!",
"Formerly Known As IGN",
"Thanks To Neo!",
"We're Still In Development, But It's On Minor Things",
"Waitin For Boss To Build Our Website....",
"Thanks For Joining Us, We Hope You Have Fun."
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;