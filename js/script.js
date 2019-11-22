function init(){
 document.getElementById("entrybutton").addEventListener("click", btnClick);
}

function btnClick(){
	alert("Michael Kuczynski: " + document.getElementById("entryinput").value);
	document.getElementById("textoutput").innerHTML = document.getElementById("entryinput").value;
}

window.addEventListener('load', init);