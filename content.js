var title = document.getElementById("contentTitle");
var body = document.getElementById("contentBody");

// 889588800000 is the number of milliseconds between 1/1/1970 and 3/11/1998
// getTime() returns the number of milliseconds between now and 1/1/1970
// do math to get my age
var overheadMS = 889588800000;
var ageMS = new Date().getTime() - 889588800000;
// converts MS to years
var dateConversion = 1000 * 60 * 60 * 24 * 365;
// my age in years
var ageYears = Math.floor(ageMS / dateConversion);

function ageString() {
	var a = "a " + ageYears + "-year-old";
	var an = "an " + ageYears + "-year-old";
	
	if (ageYears == 17) {
		return a;
	}
	else if (ageYears == 18) {
		return an;
	}
	else if (ageYears == 19) {
		return a;
	}
	else if (ageYears > 19 && ageYears < 80) {
		return a;
	}
	else if (ageYears > 79 && ageYears < 90) {
		return an;
	}
	else if (ageYears > 89) {
		return a;
	}
}

var aboutContent = "<div class=\"intro\">Will Eccles is " + ageString() + " programmer, swimmer, photographer, and regular internet-user.</div><br/><br/>I sometimes work on web design (like this page), desktop apps, and sometimes a little graphics. I often take photos when I see an opportunity, and I post the best ones to <a data-site=\"flickr\" href=\"https://www.flickr.com/photos/will_eccles/\">Flickr</a> and my more mediocre ones to <a data-site=\"instagram\" href=\"https://www.instagram.com/willeccles\">Instagram</a>.<br/><br/>This page was made entirely by hand, every pixel crafted to perfectly fit what I wanted from it. If you like it (or don't!) let me know on <a data-site=\"twitter\" href=\"https://www.twitter.com/will_eccles\">Twitter</a>! The site changes frequently :)";
var socialContent = "Even though my social links are above, I figured I would add this tab because inevitably someone would not see the buttons above. There are a few ways you can connect with me:<br/><ul><li><a data-site=\"twitter\" href=\"https://www.twitter.com/will_eccles\">Twitter</a> (preferred)</li><li><a data-site=\"instagram\" href=\"https://www.instagram.com/willeccles\">Instagram</a></li><li><a data-site=\"flickr\" href=\"https://www.flickr.com/photos/will_eccles/\">Flickr</a></li></ul>";
var junkContent = "Eventually, this page will be changed to a portfolio of my best programs and such, but for now I am working on making the site function perfectly. This site is ever-changing, remember!";

var lastTab = "about";

function tabSwitch(tabID) {
	if (lastTab != tabID) {
		switch(tabID) {
			case "about":
				enableTab(tabID, "About Me", aboutContent);
				break;
			case "social":
				enableTab(tabID, "Social", socialContent);
				break;
			case "junk":
				enableTab(tabID, "Random Junk", junkContent);
				break;
		}
	}
}

function disablePreviousTab() {
	document.getElementById(lastTab).className = "tab " + lastTab;
}

function enableTab(tabName, ttitle, tcontent) {
	title.innerHTML = ttitle;
	body.innerHTML = tcontent;
	disablePreviousTab();
	document.getElementById(tabName).className = "tab " + tabName + " selected";
	lastTab = tabName;
}

function setUpTabs() {
	title.innerHTML = "About Me";
	body.innerHTML = aboutContent;
}