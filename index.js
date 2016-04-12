window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('left_icon').addEventListener('click', function () {
       icon = document.getElementById('left_icon');
       icon1 = document.getElementById('center_icon');
       icon2 = document.getElementById('right_icon');
       canvas = document.getElementById('myCanvas');
       if (icon1.style.display == 'block'){
        icon1.style.display = 'none';
        icon2.style.display = 'none';
        icon.style.marginLeft = '438px';
        canvas.style.display = 'block';
       }
       else {
        icon1.style.display = 'block';
        icon2.style.display = 'block';
        icon.style.marginLeft = '267px';
        canvas.style.display = 'none';
       }

    }, false);

    document.getElementById('center_icon').addEventListener('click', function () {
       icon = document.getElementById('center_icon');
       icon1 = document.getElementById('left_icon');
       icon2 = document.getElementById('right_icon');
       if (icon1.style.display == 'block'){
        icon1.style.display = 'none';
        icon2.style.display = 'none';
        icon.style.marginLeft = '438px';
       }
       else {
        icon1.style.display = 'block';
        icon2.style.display = 'block';
        icon.style.marginLeft = '85px';
       }
    }, false);

    document.getElementById('right_icon').addEventListener('click', function () {
       icon = document.getElementById('right_icon');
       icon1 = document.getElementById('left_icon');
       icon2 = document.getElementById('center_icon');
       if (icon1.style.display == 'block'){
        icon1.style.display = 'none';
        icon2.style.display = 'none';
        icon.style.marginLeft = '438px';
       }
       else {
        icon1.style.display = 'block';
        icon2.style.display = 'block';
        icon.style.marginLeft = '85px';
       }
    }, false);

}, false);



/*function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'none')
      e.style.display = 'block';
   else
      e.style.display = 'none';
}*/

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

/*if (navigator.onLine) {
        window.alert("online");
} else {
        window.alert("offline");
}


window.addEventListener("offline", function(e) {window.alert("offline"); });
window.addEventListener("online", function(e) {window.alert("online"); });*/
