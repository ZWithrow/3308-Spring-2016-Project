function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'none')
      e.style.display = 'block';
   else
      e.style.display = 'none';
}

function center(id) {
	var e = document.getElementById(id);
	if(e.style.marginLeft == '85px')
		e.style.marginLeft == '438px';
	else
		e.style.marginLeft == '85px';
}

if (navigator.onLine) {
        window.alert("online");
} else {
        window.alert("offline");
}


window.addEventListener("offline", function(e) {window.alert("offline"); });
window.addEventListener("online", function(e) {window.alert("online"); });

