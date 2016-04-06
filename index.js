function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'none')
      e.style.display = 'block';
   else
      e.style.display = 'none';
}

function center(id) {
	var l = document.getElementById(id);
	if(l.style.visibility == 'visible')
		l.style.visibility == 'hidden';
	else
		l.style.visibility == 'visible';
}

if (navigator.onLine) {
        window.alert("online");
} else {
        window.alert("offline");
}


window.addEventListener("offline", function(e) {window.alert("offline"); });
window.addEventListener("online", function(e) {window.alert("online"); });