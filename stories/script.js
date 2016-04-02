var sTitle;
var sBody;
var sDate;
var error = false;

// this happens right when the document starts loading
// this should be where I load the file, etc.
document.onload = function() {
	// TODO: handle loading here, so that the user doesn't have to look at a blank page for a while if it takes a while to load the story
	
	console.log("hello");
	
	var today = new Date();
	sDate = today;
	var fpath = today.getFullYear().toString() + '-' + today.getMonth().toString() + '-' + today.getDate().toString() + '.txt';
	
	var client = new XMLHttpRequest();
	
	console.log(dir() + "/entries/" + fpath);
	client.open('GET', dir() + '/entries/' + fpath, true); // true = async
	// these two are the same
	client.ontimeout = function() {
		console.error("Error loading file: " + fpath);
		sTitle = "Uh-oh :(";
		sBody = "<p>Unfortunately, there was a problem. Either the story could not be loaded or hasn't been uploaded. Tweet me at @Will_Eccles and I'll see what I can do. Sorry!</p>";
		error = true;
		writeStory();
	};
	client.onerror = function() {
		console.error("Error loading file: " + fpath);
		sTitle = "Uh-oh :(";
		sBody = "<p>Unfortunately, there was a problem. Either the story could not be loaded or hasn't been uploaded. Tweet me at @Will_Eccles and I'll see what I can do. Sorry!</p>";
		error = true;
		writeStory();
	};
	client.onreadystatechange = function() {
		// now we parse the client response text
		// first line is the title, the rest = paragraphs
		var storyParts = client.responseText.split(/$/g);
		
		// store the story info
		sTitle = storyParts[0];
		// start at 1, since 0 is the title
		for (var i = 1; i < storyParts.length; i++) {
			// just in case I somehow get a line that's just a space or something like that
			if (/^\t?(\w\s)+.*$/g.test(storyParts[i])) {
				// wrap the line (paragraph) in <p></p>
				sBody += '<p>' + storyParts[i] + '</p>';
			}
		}
		
		// load the text into DOM
		writeStory();
	};
}

// print the story to the DOM
function writeStory() {
	document.getElementById("story title").innerHTML += sTitle;
	document.getElementById("story date").innerHTML += storyDate();
	document.getElementById("story text").innerHTML += sBody;
}

// this function writes the date into the document wherever the method is run
// i.e. put <script>writeDate();</script> in the document and at that location "[date]" will be put
function storyDate() {
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	if (!error) {
		var today = sDate;
	} else {
		// this is no different from the sDate, but in the future that may change, so this is just future-proofing.
		var today = new Date();
	}
	
	// components of the date string
	var year = today.getFullYear().toString();
	var day = today.getDate().toString();
	var month = months[today.getMonth()];
	var weekday = days[today.getDay()];
	
	var datestr = weekday + ", " + month + " " + day + ", " + year;
	
	return datestr;
}

// returns the directory for the file
function dir() {
 	var loc = location.pathname;
 	var dir = loc.substring(0, loc.lastIndexOf("/"));
 	
 	return dir;
}