var buttonText;
window.addEventListener("load", function(e) {
	document.querySelector('#clickMe').addEventListener("click", function(evt) {
		// Animate button while loading
		buttonText = document.getElementById('clickMe').innerHTML;
		document.getElementById('clickMe').innerHTML = "Loading";
		document.getElementById('clickMe').className += 'loading';
		// Send request
		console.log('Request sent');
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(xhttp.readyState == 4 && xhttp.status == 200){
				callback(xhttp);
			}
		};
		xhttp.open("GET", "https://www.google.com/search?q=Hello%20World!", true);
		xhttp.send();
	});
});

function callback(xhttp){
	console.log('Response received');
	var obj = document.getElementById('clickMe');
	obj.innerHTML = buttonText;
	removeClass(obj, 'loading');
	console.log(xhttp.responseText);
}

// Pure JS remove class (only for animation)
function removeClass(obj, cls){
	var re = new RegExp("(^|\\s)" + cls + "(\\s|$)", "g")
	obj.className = obj.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}