var btn = document.getElementById("btn");
btn.onclick = function() {
	var text = document.getElementById("text").value;
	if(null == text || "" == text) {
		document.getElementById("text").focus;
		event.preventDefault();
	}
}