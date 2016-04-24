/** Detects whether the internet is online or offline
* and displays the status on the extension popup. */
if (navigator.onLine) {
        // document.getElementById("status").innerHTML = "<p>Internet Status: Online</p>";  WORKING CODE
		// document.getElementById("status").innerHTML = "<a class="internetContainer" href = "http://www.speedtest.net/" target="_blank" > To test you're internet speeds via speedtest.net, click here.. </a>";
		// document.getElementById('status').innerHTML = "<a href='http://www.speedtest.net/'><img src='images/onlineImage.png' height=50px width=260px</a>";
		document.getElementById('status').innerHTML = "<a href='index.html' target='_blank'><img src='images/onlineImage.png' height=50px width=260px</a>";

} else {
        document.getElementById("status").innerHTML = "<a href='index.html' target='_blank'><img src='images/offlineImage.png' height=50px width=260px</a>";
}