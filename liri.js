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





//Spotify starts here 

 function mySpotify(song) {
 	console.log(song);
 	var music = new Spotify(keys.spotifyKeys);


	song = 'ace of bass';



music.search({ type: 'track', query: song }).then(function(response){


		for (var i = 0; i < response.tracks.items.length; i++) {
			console.log(response.tracks.items[i].name);
		}


			 });
}
  





