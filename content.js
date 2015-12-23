var title = document.getElementById("contentTitle");
var body = document.getElementById("contentBody");

// 889588800000 is the number of milliseconds between 1/1/1970 and 3/11/1998
// getTime() returns the number of milliseconds between now and 1/1/1970
// do math to get my age
var overheadMS = 889588800000;
var ageMS = new Date().getTime() - overheadMS;
// converts MS to years
var dateConversion = 1000 * 60 * 60 * 24 * 365;
// my age in years
var ageYears = Math.floor(ageMS / dateConversion);

function ageString() {
	var a = "a " + ageYears + "-year-old";
	var an = "an " + ageYears + "-year-old";
	
	return new RegExp("(18|8[0-9])").test(ageYears.toString()) ? an : a;
}

var aboutContent = "<div class=\"intro\">Will Eccles is " + ageString() + " programmer, swimmer, photographer, and regular internet-user.</div><br/><br/>I sometimes work on web design (like this page), desktop apps, and sometimes a little graphics. I often take photos when I see an opportunity, and I post the best ones to <a data-site=\"flickr\" href=\"https://www.flickr.com/photos/will_eccles/\">Flickr</a> and my more mediocre ones to <a data-site=\"instagram\" href=\"https://www.instagram.com/willeccles\">Instagram</a>. Fun fact: I also speak Spanish, and would learn more languages, namely German, if I had more time to.<br/><br/>This page was made entirely by hand, every pixel crafted to perfectly fit what I wanted from it. If you like it (or don't!) let me know on <a data-site=\"twitter\" href=\"https://www.twitter.com/will_eccles\">Twitter</a>! The site changes frequently :)";
var socialContent = "Even though my social links are above, I figured I would add this tab because inevitably someone would not see the buttons above. There are a few ways you can connect with me:<br/><ul><li><a data-site=\"twitter\" href=\"https://www.twitter.com/will_eccles\">Twitter</a> (preferred)</li><li><a data-site=\"instagram\" href=\"https://www.instagram.com/willeccles\">Instagram</a></li><li><a data-site=\"flickr\" href=\"https://www.flickr.com/photos/will_eccles/\">Flickr</a></li></ul>";
var portfolioContent = "Eventually, I will make this a portfolio of my best works, ranging from programs to graphics. For now, however, it is a useless page because I haven't gotten here yet."

var lastTab = "about";

function tabSwitch(tabID, tabStyle) {
	if (lastTab != tabID) {
		switch(tabID) {
			case "about":
				enableTab(tabID, "About Me", aboutContent);
				break;
			case "social":
				enableTab(tabID, "Social", socialContent);
				break;
			case "portfolio":
				enableTab(tabID, "Random portfolio", portfolioContent);
				break;
		}
	}
}

function disablePreviousTab() {
	document.getElementById(lastTab).className = document.getElementById(lastTab).className.replace(" selected", "");
}

function enableTab(tabName, ttitle, tcontent) {
	title.innerHTML = ttitle;
	body.innerHTML = tcontent;
	disablePreviousTab();
	document.getElementById(tabName).className += " selected";
	lastTab = tabName;
}

function setUpTabs() {
	title.innerHTML = "About Me";
	body.innerHTML = aboutContent;
}

function openMobileMenu() {
	
}

// handle social links on mobile.
function social(arg) {
    switch(arg) {
        case 'twitter':
        document.location.href = "http://www.twitter.com/will_eccles";
        break;
        case 'flickr':
        document.location.href = "http://www.flickr.com/will_eccles";
        break;
        case 'instagram':
        document.location.href = "http://www.instagram.com/willeccles";
        break;
        case 'github':
        document.location.href = "http://www.github.com/willeccles";
        break;
    }
}

/* DEPRECATED
var isOpen = false;
var chevron = document.getElementById("chevron");

// open/close the mobile social menu
function mSMenu() {
    if (isOpen) {
        // close it
        chevron.className = "mobile-social-menu";
        isOpen = false;
    }
    else {
        // open it
        chevron.className = "mobile-social-menu open";
        isOpen = true;
    }
}
*/