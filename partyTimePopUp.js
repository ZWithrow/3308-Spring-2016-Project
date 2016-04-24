/** Detects whether the internet is online or offline
* and displays the status on the extension popup. */
if (navigator.onLine) {
	// If the internet is online, the below code shows an online green button and links to a speed test. Otherwise it just says the internet is out, and give a red button
	document.getElementById('status').innerHTML = "<a href='index.html' target='_blank'><img src='images/onlineImage.png' height=50px width=260px</a>";

} else {
	document.getElementById("status").innerHTML = "<a href='index.html' target='_blank'><img src='images/offlineImage.png' height=50px width=260px</a>";
}