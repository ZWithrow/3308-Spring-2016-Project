/** Detects whether the internet is online or offline
* and displays the status on the extension popup. */
if (navigator.onLine) {
        document.getElementById("status").innerHTML = "<p>Internet Status: Online</p>";
} else {
        document.getElementById("status").innerHTML = "<p>Internet Status: Offline</p>";
}