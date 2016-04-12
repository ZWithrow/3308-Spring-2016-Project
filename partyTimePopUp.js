if (navigator.onLine) {
	document.getElementById('online').style.display = 'block';
	document.getElementById('offline').style.display = 'none';
} else {
	document.getElementById('offline').style.display = 'block';
	document.getElementById('online').style.display = 'none';
}


window.addEventListener("offline", function(e) {window.alert("offline"); });
window.addEventListener("online", function(e) {window.alert("online"); });
