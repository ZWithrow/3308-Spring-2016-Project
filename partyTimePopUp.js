
// window.addEventListener('statusCheck', function (e) {
// 	if (navigator.onLine) {
// 		document.getElementById('online').style.display = 'block';
// 		document.getElementById('offline').style.display = 'none';
// 	} else {
// 		document.getElementById('offline').style.display = 'block';
// 		document.getElementById('online').style.display = 'none';
// 	}
// });


/*window.addEventListener("offline", status);
window.addEventListener("online", status);*/

if (navigator.onLine) {
	document.getElementById('online').style.display = 'block';
	document.getElementById('offline').style.display = 'none';
} else {
	document.getElementById('offline').style.display = 'block';
	document.getElementById('online').style.display = 'none';
}
