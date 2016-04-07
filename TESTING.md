## Testing

#### Who
Emma Montross, Zach Withrow, Michael Feller, Matt Wright

#### Title 
Party Time for Those Offline

#### Vision
Provide short, simple games to entertain internet users even when their network connection is down or just when users are bored, as well as provide status updates so they know when they can continue their normal internet use.

#### Automated Tests
For automated testing, we used Jasminse, a JavaScript testing framework. To run the tests, bring up SpecRunner.html (located in the testing folder) in a browser. We tested our game code's ability to detect keys being pressed and released. Here is a screenshot of the testing output:
![alt-tag](https://github.com/ZWithrow/3308-Spring-2016-Project/blob/master/testing/PassedTests.png)


#### User Acceptance 1
| Info | Our Info |
| -----: | :----- |
| **Use Case ID:** | UC-01 |
| **Use Case Name:** | Extension Download and Activation |
| **Description:** | User can download the extension and activate it to begin use within their Google Chrome Browser |

___________

|Background Info | Our Application Info|
 -------------- | -------------- 
| **Users:** | Google Chrome User |
| **Pre-Conditions:** | User must have google Chrome installed on their computer, and must have the public link to access the Party Time extension.  |
| **Post-Conditions:** | User will have Party Time for Those Offline Chrome extension installed and running on her or his computer |
| **Frequency of Use:** | Once per user to install the extension. Need not be repeated unless user manually removes extension and chooses to reinstall. |

_______

Flow of Events | Actor Action |  System Response | Comments
--------------- | -------------- | -------------- | -------------- 
 | 1. Visit GitHub Repository at https://github.com/ZWithrow/3308-Spring-2016-Project/tree/master | Website shown |  -
 | 2. Download to local machine by clicking Download ZIP in upper right hand corner of screen | zip file with program will download to user-specified repository | User can move code to new repository if it downloads in an undesirable place
 | 3. User unzips file | Folder created with entire program enclosed | It is vital to move the programs enclosing folder to its final desired directory before continuing. Chrome doesn't track files that are moved after unpacking step preformed in the next step.
 | 4. Open Google Chrome, navigate to extensions folder(in settings), Select "Developer Mode" checkbox towards upper right of screen, click "Load Packed Extension", select freshly unzipped folder, and select "Enable" next to new extension if it isn't already checked | Google Chrome unpacks extension then adds it to Chrome, and should by default enable the extension for standard Google Chrome use. | Party Hat Icon will appear in upper right corner of Google Chrome with any other previously existing images.


_______



 Observations  | Our Results
--------------- | --------------
 **Test Passed:** | Pass 
 **Notes and Issues:** | No issues if directions are followed. Only works in Google Chrome. If the directory is moved or deleted after adding the extension to Chrome it will not work, though the name may still appear in Google Chrome Extension List temporarily.





______________________________________________________________________________________________________
______________________________________________________________________________________________________
______________________________________________________________________________________________________

#### User Acceptance 2
| Info | Our Info |
| -----: | :----- |
| **Use Case ID:** | UC-02 |
| **Use Case Name:** | Internet Connection Detection |
| **Description:** | User be alerted if internet connection is initiated or lost while extention page is open. |

___________

|Background Info | Our Application Info|
 -------------- | -------------- 
| **Users:** | Google Chrome Party Time Extension User |
| **Pre-Conditions:** | Extension must be installed. Extension must be enabled. Extension webpage must be opened by opening a new tab. User must have ability to connect and disconnect from internet. |
| **Post-Conditions:** | User will be alerted if internet connection is lost or made while web page is opened  |
| **Frequency of Use:** | Any time internet connection is lost or made while user has extension installed, enabled, and its web page open. |

_______

Flow of Events | Actor Action |  System Response | Comments
--------------- | -------------- | -------------- | -------------- 
 | 1. Ensure Party Time for Those Offline Extension webpage is open by opening a new tab. | Google Chrome pop up will alert the user whether the user has internet connection or not. | -
 | 2. Turn off internet connection, turn on internet connection. Repeat however many times you'd like | Google Chrome will issue a pop-up to let user know when internet connection is made or fails. | Each time internet connection fails or is made, A pop up window will either say "Online" if internet connection is made or "Offline" if internet connection is lost.


_______



  Observations  | Our Results
--------------- | --------------
 **Test Passed:** | Pass
 **Notes and Issues:** | Doesn't work when webpage isn't open as the script runs as an event listener. We are looking into running the script in the background on your computer with a short sleep time to both easy cpu cycle usage and to alert users anytime the extension is enabled, not only when it is open. So far we have only found ways that require user permissions, which we've tried to avoid so more users would feel comfortable using the program. 








______________________________________________________________________________________________________
______________________________________________________________________________________________________
______________________________________________________________________________________________________


#### User Acceptance 3
| Info | Our Info |
| -----: | :----- |
| **Use Case ID:** | UC-03 |
| **Use Case Name:** | Speed Test linking test |
| **Description:** | Link to external website, "Speedtest.net" in banner. |

___________

|Background Info | Our Application Info|
 -------------- | -------------- 
| **Users:** | Google Chrome Party Time Extension User |
| **Pre-Conditions:** | Extension must be installed. Extension must be enabled. User must have internet connection to access the external website and run the speed test |
| **Post-Conditions:** | User will be linked to an external website, "speedtest.net" where she or he can run a speedtest to determine the speed of their internet connection |
| **Frequency of Use:** | Any time a user wants to know the speed of their service. Could be used 0 times, or many times a day depending on user preferences. |

_______

Flow of Events | Actor Action |  System Response | Comments
--------------- | -------------- | -------------- | -------------- 
 | 1. Click on "Party Time for Those Offline" icon (A party hat) in the extension dock on users Google Chrome window. | A banner will lower from the extension icon with text and images on it. A pop-up will alert the user if they have internet connection or not. | If the user doesn't have internet connection, they will not be able to access external websites.
 | 2. There will be a text link that reads, "To test you're internet speeds via speedtest.net, click here." Click this to move to an external website and test your internet connection | A new webpage, "speedtest.net" will open in a new tab. | This isn't our website, just a very useful tool by the great people at Ookla.
 | 3. Though this isn't our website, the user can click "Begin Test" on Ookla's speedtest website to initiate a speed test. | A speed test will begin, and will afterwards let the user know their internet download and upload speeds in mbps. | Again, this awesome service is by Ookla, and not us. Just really trying to be sure we aren't accidentally taking credit for something we didn't do.


_______



 Observations  | Our Results
--------------- | --------------
 **Test Passed:** | Pass
 **Notes and Issues:** | Because this is an external website, we have no control over its functions. It only will work if the user has internet connection. 



______________________________________________________________________________________________________
______________________________________________________________________________________________________
______________________________________________________________________________________________________


#### User Acceptance 4
| Info | Our Info |
| -----: | :----- |
| **Use Case ID:** | UC-04 |
| **Use Case Name:** | Shooter Game Test! |
| **Description:** | The user will play a game on our webpage. This might be the best test, because you get to play a game. |

___________

|Background Info | Our Application Info|
 -------------- | -------------- 
| **Users:** | Google Chrome Party Time Extension User |
| **Pre-Conditions:** | Extension must be installed. Extension must be enabled. |
| **Post-Conditions:** | User will have played a game, and received a score for how well they did. |
| **Frequency of Use:** | Depends purely on how much the user feels like playing. If an average user is anything like us, they will play the games more than they do work. The game can be played on every opening of the Party Time webpage. |

_______

Flow of Events | Actor Action |  System Response | Comments
--------------- | -------------- | -------------- | -------------- 
 | 1. Open a new tab which will load the Party Time Extension webpage. | The System will alert the user to let them know whether they are or are not connected to the internet. | -
 | 2. Close the pop up and click on the banner with the game. The shooter game should be pre-loaded. | There will be no visible response, but the banner should say "Press space to play" | -
 | 3. Press the spacebar to begin the games, the user can move her or his ship downwards and upwards via keyboard. Use the spacebar to shoot a laser gun. Avoid the flying balls and try to shoot as many as possible | The ship will move up and down on the screen, every spacebar shot will shoot a green laser towards the flying balls, each will have a random size and speed (within limits) | This is obviously the best part of the extension. I mean, games are dope.
 | 4. After the user gets hit by a flying ball, the game will display, "Game Over" and tell the user her or his score. | The game banner canvas will display the user score and "GAME OVER" text over the game. The user can refresh to play again. | I think our top score was 170 last time I heard, but it keeps moving upwards. I'm sure that'll be outdated by the time anybody else reads this.


_______



 Observations  | Our Results
--------------- | --------------
 **Test Passed:** | Pass
 **Notes and Issues:** | The game requires a refresh currently to play again, but a "replay game" button should come soon. More games are available.


