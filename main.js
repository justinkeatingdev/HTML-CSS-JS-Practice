document.getElementById("jstest").innerHTML = "This is the footer section using JavaScript";
document.getElementById("fullname").innerHTML = "Hello " + fname + " " + lname;
document.getElementById("genderselected").innerHTML = "You have selected " + gender + " as your gender.";
document.getElementById("classestaken").innerHTML = "You have said you are requesting help with these classes" + math + science + history;

function getParameterByName(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}