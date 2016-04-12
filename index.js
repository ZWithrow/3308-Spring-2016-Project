window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('left_icon').addEventListener('click', function () {
       icon1 = document.getElementById('center_icon');
       icon2 = document.getElementById('right_icon');
       iconmargin = document.getElementById('left_icon').style.marginLeft
       if (icon1.style.display == 'block'){
        icon1.style.display = 'none';
        icon2.style.display = 'none';
       }
       else {
        icon1.style.display = 'block';
        icon2.style.display = 'block';
       }
       if (iconmargin == "267px"){
        iconmargin = "438px";
       }
       else {
        iconmargin = "267px";
       }
    }, false);

    document.getElementById('center_icon').addEventListener('click', function () {
       icon1 = document.getElementById('left_icon');
       icon2 = document.getElementById('right_icon');
       if (icon1.style.display == 'block'){
        icon1.style.display = 'none';
        icon2.style.display = 'none';
       }
       else {
        icon1.style.display = 'block';
        icon2.style.display = 'block';
       }
    }, false);

    document.getElementById('right_icon').addEventListener('click', function () {
       icon1 = document.getElementById('left_icon');
       icon2 = document.getElementById('center_icon');
       if (icon1.style.display == 'block'){
        icon1.style.display = 'none';
        icon2.style.display = 'none';
       }
       else {
        icon1.style.display = 'block';
        icon2.style.display = 'block';
       }
    }, false);

    /*document.getElementById('left_icon').addEventListener('click', function () {
      document.getElementById('right_icon').style.display = 'none';
    }, false);*/
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
