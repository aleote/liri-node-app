// write the code you need to grab the data from the keys.js
//then store the keys in a variable 

var keys = require('./keys');


var twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request")
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
} else (liriArrgs === "movie-this") {
	// what goes here? 
	OMDBInfo(movie);
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

    // console.log(song);

    var music = new Spotify(keys.spotifyKeys);

    if (song === undefined) {

        song = "ace of base";

    }

    music.search({

        type: 'track',

        query: song

    }).then(function (response) {

        var song = response.tracks.items;

	        // console.log(song);

        for (var i = 0; i < song.length; i++) {

            console.log("Song Title:" + song[i].name);

            console.log("Preview Url:" + song[i].preview_url);

            console.log("Album:" + song[i].album.album_type);
        }

    });

}

// OMDB Movie starts here ! 

 function OMDBInfo(movie) {

 		 

 		if (movie === "") {

        movie = "Mr. Nobody";
    }
    
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=40e9cece";

// taken from npm website for request
// send the request to OMDB website 
request( queryURL , function (error, response, body) {
 		 console.log('error for OMDB:', error);

		console.log('Title: ' + JSON.parse(body).Title);
        console.log('Year: ' + JSON.parse(body).Year);
        console.log('Rotten Tomatoes Rating: ' + JSON.parse(body).Ratings[1].Value);
        console.log('imdb Rating: ' + JSON.parse(body).imdbRating);
        console.log('Country: ' + JSON.parse(body).Country);
        console.log('Language: ' + JSON.parse(body).Language);
        console.log('Plot: ' + JSON.parse(body).Plot);
        console.log('Actors: ' + JSON.parse(body).Actors);
  }
 };





  // for (var i = 0; i < movie.length; i++) {
  // 	console.log(movie[i].name
  }
  
});
