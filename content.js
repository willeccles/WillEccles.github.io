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

var aboutContent = "Will Eccles is " + ageString() + " programmer, swimmer, photographer, and regular internet-user. <br/><br/> [WIP]";
var socialContent = "";
var junkContent = "";

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