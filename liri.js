// write the code you need to grab the data from the keys.js
//then store the keys in a variable 

var keys = require('./keys');

console.log(keys);

var twitter = require("twitter");
// var spotify = require("spotify");
// var request = require("request")
var fs = require("fs");


// // this reads the command line
// var commandArrgs = process.argv;
// //this is the command liri will recieve 
// var liriCommand = commandArrgs[2];
// //
// var liriArrgs = "";
// for (var i =3; i <commandArrgs.length; i++){
// 	liriArrgs += commandArrgs[i] + " ";
// }

var T = new twitter(keys.twitterKeys);
var params = {
	count: 20


}


var liriArrgs = process.argv[2];


function myTweets ( ) {
T.get('statuses/user_timeline', params, gotData);
}
function gotData(err, data, response){
   fs.writeFile("log.txt", "tweets", function(err) {
		if (err){
			console.log(err);
		}
	})

	// console.log(data);
	for (var i = 0; i < data.length; i++) {
		// data[i].text


		// console.log(data[i].text);
// var tweetsArray = [];
var tweetieBird = data[i].text;
// tweetsArray.push(tweetieBird);
getTweets(tweetieBird);
		
	}
	// console.log(tweetsArray);
	// getTweets();

}


switch(liriArrgs){

	case 'my-tweets':
	myTweets();
	break;

}

//what louis sent me 
// var params = {
//         screen_name: 'botus'
//     };
//     keys.client.get('statuses/user_timeline', params, function(error, tweets, response) {
//         if (error) {
//             console.log("you got a error in here");
//         }
//need to display last 20 tweets 
// \n\n makes the data display vertically 
function getTweets(tweets) {
	fs.appendFile("log.txt",tweets+"\n\n", function(err) {
		if (err){
			console.log(err);
		}
	})
		
	console.log('hello');	

}

// this is what I entered from npm's website 
// var client = new Twitter(twitterKeys);
// var params = {screen_name:"amleote", count:20};

// client.get("statuses/user_timeline", params, function(error, tweets, response) {
// 	if (error) {
// 		console.log(err);

	


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



