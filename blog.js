/**
 * This script is made to make a JS/HTML only blog.
 * While it may not be the best way, I don't really care because I made it for fun,
 * not for efficiency ;)
 */

var blogArea = document.getElementById("blogEntries");
var entriesFolder = "/entries/";

// when the blog area loads
// (hint: this is where you load the blog)
window.onload = function() {
	console.info("Loading blog...");
	
	// load blog into page
	var client = new XMLHttpRequest();
	client.open('GET', dir() + '/entries/ebola.txt');
	client.onreadystatechange = function() {
		alert(client.responseText);
	}
	client.send();
};

// just for reference, saves me some time in debugging
function gotHere() {
	console.info("i dun got here");
}

function dir() {
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf("/"));
	
	return dir;
}