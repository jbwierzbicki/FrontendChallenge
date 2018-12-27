function startTimer(duration, display) {
  var start = Date.now(),
    diff,
    minutes,
    seconds;

  function timer() {

    diff = duration - (((Date.now() - start) / 1000) | 0);


    minutes = (diff / 60) | 0;
    seconds = (diff % 60) | 0;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = minutes + " min";

    if (diff <= 0) {

      start = Date.now() + 1000;
    }

    if (minutes <= 5) {
      display.style.color = "#B82121";
    } else {
      display.style.color = "Black";
    }

  };

  timer();
  setInterval(timer, 1000);
};

window.onload = function() {
  clock();
  //Live 12 hour time for status bar
  function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour == 0) {
      hour = 12;
    }
    if (TwentyFourHour < 12) {
      mid = 'am';
    }
    document.getElementById('currentTime').innerHTML = hour + ':' + min + mid;
    setTimeout(clock, 1000);
  }

  //Live bus counter for bus-counter DIV
  busCounter();

  function busCounter() {
    var busListingCount = document.getElementsByClassName("bus-listing").length
    document.getElementById('bus-counter').innerHTML = busListingCount;
  }

  //Timer function for bus listings



  listing1Timer();
  function listing1Timer() {
    var countdownTime = 60 * 20,
      display = document.getElementById('listing-1-timer');
      startTimer(countdownTime, display);
      window.setInterval(startTimer, countdownTime);
  }

  listing2Timer();
  function listing2Timer() {
    var countdownTime = 60 * 10,
      display = document.getElementById('listing-2-timer');
      startTimer(countdownTime, display);
      window.setInterval(startTimer, countdownTime);
  }

  listing3Timer();
  function listing3Timer() {
    var countdownTime = 60 * 16,
      display = document.getElementById('listing-3-timer');
      startTimer(countdownTime, display);
      window.setInterval(startTimer, countdownTime);
  }

  listing4Timer();
  function listing4Timer() {
    var countdownTime = 60 * 15,
      display = document.getElementById('listing-4-timer');
      startTimer(countdownTime, display);
      window.setInterval(startTimer, countdownTime);
  }

}
