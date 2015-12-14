function source()
{
	var source = document.getElementById("source");

	if(source.value== "1")

{
	alert("http://coastmedical.ca/");
}
else if(source.value== "2" )

{
	alert("http://coastmedical.ca/our-doctors/");
}

}

function displayAdditional() {

var selectfield =	document.getElementById("anliegen");
var additionalArea = document.getElementById("additionalArea");

	while (additionalArea.hasChildNodes()) {
		additionalArea.removeChild(additionalArea.lastChild);
	 }
	if(selectfield.value=="question"){
	additionalArea.appendChild(document.createTextNode("Please type in your question in the textfield below!"));
}
	else if (selectfield.value=="appointment"){
	
	additionalArea.appendChild(document.createTextNode("Please call us directly! "));
	
	}
	
	
}
//Nadja Krenzien (nk15qx), Student Number: 5938998, IASC2P02, Final Assignment

