var btn3 = document.getElementById("btn3");
var btn2 = document.getElementById("btn2");
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", red);
btn2.addEventListener("click", green);
btn3.addEventListener("click", yellow);

var a = document.getElementsByTagName("a");

function yellow() {
	for(var i = 0; i < a.length; i++) {
		a[i].style.color = "yellow";
	}
	localStorage.color = "yellow";
}

function green() {
	for(var i = 0; i < a.length; i++) {
		a[i].style.color = "green";
	}
	localStorage.color = "green";
}

function red() {
	for(var i = 0; i < a.length; i++) {
		a[i].style.color = "red";
	}
	localStorage.color = "red";
}
//用localstorage第一种方法
function setLocalStrorage() {

	if(localStorage.color == "yellow") {
		for(var i = 0; i < a.length; i++) {
			a[i].style.color = "yellow";
		}
	}
	if(localStorage.color == "green") {
		for(var i = 0; i < a.length; i++) {
			a[i].style.color = "green";
		}
	}
	if(localStorage.color == "red") {
		for(var i = 0; i < a.length; i++) {
			a[i].style.color = "red";
		}
	}

}
//用localstorage第二种方法
//function setLocalStrorage() {
//	if(localStorage.color) {
//		for(var i = 0; i < a.length; i++)
//			a[i].style.color = localStorage.color;
//	}
//}