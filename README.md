# Projects Guide

# smart-cookies-video-app

**Description** - Created a simple web page that displays the video. At 1:04, pause the video and make the following question appear: “3 + 2 = ?” with multiple choice answers of 5, 3, 8, and 4.
Only if the correct answer is chosen should the video proceed. The video should not be able to proceed unless they answer the question.
<br /><br />
**index.html-**
This is the main file to run the project. Just open it in the browser to run the project.
<br /><br />
**app.js-**
This file includes the business logic to pause the video at 1:04 seconds, monitor the video, and asks user to answer the question to proceed the video at 1:04 sec.
<br /><br />
**app.css-**
This file includes custom CSS.

**How to run**
1. Open index.html in the browser
2. You can update the video url at here https://github.com/EllocentLabs/smart-cookies-test/blob/master/smart-cookies-video-app/app.js#L4
3. You can update the Time to pause the video at here https://github.com/EllocentLabs/smart-cookies-test/blob/master/smart-cookies-video-app/app.js#L6

# smart-cookies-frontend

**Description** - This app provide ui to create account on firebase and add user entry in the database.
<br /><br />
**index.html-**
This is the main file to run the project. Open it in the browser to run the project.
<br /><br />
**app.js-**
This file includes the business logic to create account on firebase and add user entry in the database.
**How to run**
1. Update your firebase config in this file - https://github.com/EllocentLabs/smart-cookies-test/blob/master/smart-cookies-frontend/index.html#L32
2. Open index.html in the browser

# smart-cookies-cloud

**Description** - This is fireabase cloud function app which includes business logic to listen the user account creation and communicate(to send an email) with drip apis when an account gets cerated.
<br /><br />
**How to run**
It needs to deploy on the firebase using following commands
<br /><br />

<pre>npm install -g firebase-tools</pre>
<pre>cd smart-cookies-cloud</pre>
<pre>firebase login</pre>
<pre>firebase deploy</pre>
