
// window.addEventListener('statusCheck', function (e) {
// 	if (navigator.onLine) {
// 		document.getElementById('online').style.display = 'block';
// 		document.getElementById('offline').style.display = 'none';
// 	} else {
// 		document.getElementById('offline').style.display = 'block';
// 		document.getElementById('online').style.display = 'none';
// 	}
// });


// window.addEventListener("online", function(e) {
// 	onvar = document.getElementById('online');
// 	offvar = document.getElementById('offline');
// 	if(onvar.style.display == 'none'){
// 		onvar.style.display = 'block';
// 		offvar.style.display = 'none';
// 	}
// 	else{
// 		onvar.style.display = 'none';
// 		offvar.style.display = 'block';
// 	}
// 	/*document.getElementById("online").style.display = 'block';
// 	document.getElementById("offline").style.display = 'none';*/
// });
// window.addEventListener("offline", function(e) {
// 	document.getElementById("offline").style.display = 'block';
// 	document.getElementById("online").style.display = 'none';
// });

// window.addEventListener("online", status);
// window.addEventListener("offline", status);

// function status(e) {
// 	if (navigator.onLine) {
// 		document.getElementById('online').style.display = 'block';
// 		document.getElementById('offline').style.display = 'none';
// 	} else {
// 		document.getElementById('offline').style.display = 'block';
// 		document.getElementById('online').style.display = 'none';
// 	}
// }

// window.addEventListener("offline", function(e) {window.alert("offline"); });
// window.addEventListener("online", function(e) {window.alert("online"); });


if (navigator.onLine) {
        window.alert("online");
} else {
        window.alert("offline");
}