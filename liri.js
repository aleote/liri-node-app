// write the code you need to grab the data from the keys.js
//then store the keys in a variable 

var keys = require('./keys');


var twitter = require("twitter");
var Spotify = require('node-spotify-api');
// var request = require("request")
var fs = require("fs");



var Tweety = new twitter(keys.twitterKeys);
var params = {
	count: 20
}


var liriArrgs = process.argv[2];


function myTweets ( ) {
Tweety.get('statuses/user_timeline', params, gotData);
}
function gotData(err, data, response){
   fs.writeFile("log.txt", "tweets", function(err) {
		if (err){
			console.log(err);
		}
	})

	// console.log(data);
	for (var i = 0; i < data.length; i++) {
		"Tweet:" + data[i].text + "Created On:" + data[i].created_at


		console.log(data[i].text);
		console.log(data[i].created_at);
var tweetsArray = [];
var tweetieBird = data[i].text;
tweetsArray.push(tweetieBird);
getTweets(tweetieBird);
		
	}
	console.log(tweetsArray);
	getTweets();

}

var query = process.argv.slice(3);
console.log(query.join(""));
query = query.join('');


if (liriArrgs === "my-tweets"){
	myTweets();
} else if (liriArrgs === "spotify-this-song") {
	mySpotify(query);
}




function getTweets(tweets) {
	fs.appendFile("log.txt",tweets+"\n\n", function(err) {
		if (err){
			console.log(err);
		}
	})
		
	console.log('hello');	

}


	


// } else {
// 	var outputString = "========\n" + "User Tweets:\n" + "========\n\n";

// for (var i=0; i < tweets.length; i++) {
// 	outputString += "created on: " + tweets[i].created_at + "tweet content: " + tweets[i].text;

// }

// //appending
// fs.appendFile("log.txt", "Liri Response: " + outputString, function(err) {
// 	if (err) {
// 		console.log(err);
// 	}
// })
// };


//Spotify starts here 

 function mySpotify(song) {
 	console.log(song);
 	var music = new Spotify(keys.spotifyKeys);


	song = 'ace of bass';



music.search({ type: 'track', query: song }).then(function(response){
  // if (err) {
  //   return console.log('Error occurred: ' + err);
  // }
  // else { 
  // 	var songInfo = data.tracks.items[0];
  // 	if (!songInfo) {
  // 		var errorString = "Error: No song info to retrieve";
  // 		console.log(errorString);
  	

  // 	return;

  // } else {
  // 	var songOutput = "Song Name:" + songInfo.name + "Artist:" + songInfo.artist[0].name + "Album:" + songInfo.album.name + "Preview Link Here:" + songInfo.preview_url;
  // 	console.log(songOutput);
			  // }

		for (var i = 0; i < response.tracks.items.length; i++) {
			console.log(response.tracks.items[i].name);
		}


			 });
}
  





