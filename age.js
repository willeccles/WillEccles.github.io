// number of ms between 1/1/1970 and 3/11/1998
var overheadMS = 889588800000;
var ageMS = new Date().getTime() - overheadMS;
// converts MS to years
var dateConversion = 1000 * 60 * 60 * 24 * 365;
// my age in years
var ageYears = Math.floor(ageMS / dateConversion);

function ageString() {
	var a = "a " + ageYears + "-year-old";
	var an = "an " + ageYears + "-year-old";

	return (new RegExp("(18|8[0-9])").test(ageYears.toString())) ? an : a;
}
