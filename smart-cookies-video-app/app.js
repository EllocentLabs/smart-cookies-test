/* variables declarations... */

 //set video url here 
const VIDEO_URL= "https://drive.google.com/uc?export=download&id=15g6xV_a3CEikLYejznE2iONpFyDb0gQX"
 //set quiz time here in seconds
const TIME_TO_PAUSE = 64; 
const EVENTS = {
    DURATION: "timeupdate",
    PLAY: "play"
}
const PLAYER_ID = "videoTag";

var videoPlayer, hasQuizSoved = false, isQuizNeeded = true;


/*  function declarations... */

$(document).ready(function () {
    videoPlayer = document.getElementById(PLAYER_ID);
    videoPlayer.src=VIDEO_URL
    videoPlayer.addEventListener(EVENTS.DURATION, videoCallback, false);
    videoPlayer.addEventListener(EVENTS.PLAY, videoCallback, false);
});

function videoCallback() {
    if (videoPlayer.currentTime >= TIME_TO_PAUSE && !hasQuizSoved) {
    displayQuiz();
    videoPlayer.pause();
    }
}

function displayQuiz() {
    if (isQuizNeeded) $("#myModal").modal();
}

function hideQuiz() {
    $("#myModal").modal("hide");
}

function checkAnswer() {
    const options = document.getElementsByName("option");
    const answer = Array.prototype.find.call(
    options,
    (option) => option.checked
    );
    if (!answer) return;

    hasQuizSoved = answer.value == 5;

    if (hasQuizSoved) videoPlayer.play();
    else alert("Incorrect answer");

    isQuizNeeded = false;
    hideQuiz();
}
