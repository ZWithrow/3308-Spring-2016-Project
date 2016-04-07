function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'none')
      e.style.display = 'block';
   else
      e.style.display = 'none';
}

/*function center(id) {
	var l = document.getElementById(id);
	l.animate({'left' : '0px'}), {duration : 400});
}*/

/*$(function()
{
  var expanded = false;
  $('#center_icon').click(function()
                      {
                          if (!expanded)
                          {
                              $(this).animate({'left' : '0px'}, {duration : 400});
                              expanded = true;
                          }
                          else
                          {
                             $(this).animate({'left' : '565px'}, {duration: 400});
                              expanded = false;
                          }
                      });
 });
}*/

if (navigator.onLine) {
        window.alert("online");
} else {
        window.alert("offline");
}


window.addEventListener("offline", function(e) {window.alert("offline"); });
window.addEventListener("online", function(e) {window.alert("online"); });
