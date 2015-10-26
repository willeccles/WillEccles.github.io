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
		var entryParts = client.responseText.split("|");
		
		var entryTitle = entryParts[0].replace(new RegExp("TITLE: *"), "");
		var entryDate = entryParts[1].replace(new RegExp("DATE: *"), "");
		
		blogArea.innerHTML += entryHTML(entryTitle, entryDate, entryParts);
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

// returns the html version of the entry to be placed on the page
function entryHTML(title, date, contentArray) {
	var entry = '<div class="entry">';

	var content = "";
	
	for (var i = 2; i < contentArray.length; i++) {
		content += contentArray[i];
	}

	entry += '\n<div class="entryTitle">' + title + '</div>';
	entry += '\n<div class="entryDate">' + parseDate(date) + '</div>';
	entry += '\n<p class="entryPreview">' + content.trim() + '</div>';
}

// parse a date. 10 26 2015 = October 26, 2015
function parseDate(date) {
	var dateParts = date.split(" ");
	
	var month;
	var day = dateParts[1];
	var year = dateParts[2];
	
	switch(dateParts[0]) {
		case "1":
			month = "January";
			break;
		case "2":
			month = "February";
			break;
		case "3":
			month = "March";
			break;
		case "4":
			month = "April";
			break;
		case "5":
			month = "May";
			break;
		case "6":
			month = "June";
			break;
		case "7":
			month = "July";
			break;
		case "8":
			month = "August";
			break;
		case "9":
			month = "September";
			break;
		case "10":
			month = "October";
			break;
		case "11":
			month = "November";
			break;
		case "12":
			month = "December";
			break;
	}
	
	return month + " " + day + ", " + year;
}