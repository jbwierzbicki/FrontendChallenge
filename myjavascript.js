
//Timer backend for bus listings
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

  //Timer functions for bus listings
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

  listing5Timer();
  function listing5Timer() {
    var countdownTime = 60 * 10,
      display = document.getElementById('listing-5-timer');
      startTimer(countdownTime, display);
      window.setInterval(startTimer, countdownTime);
  }

}

//Modal box generator
function busListing1() {
  var mainScreenBusNumber = document.getElementById('bus-number-1');
  var modalScreenBusNumber = document.getElementById('modal-bus-number');
  modalScreenBusNumber.innerHTML = mainScreenBusNumber.innerHTML;

  var mainScreenDestination = document.getElementById('bus-destination-1');
  var modalScreenDestination = document.getElementById('modal-bus-destination');
  modalScreenDestination.innerHTML = "Bus to " + mainScreenDestination.innerHTML;

  var mainScreenArrivaltime = document.getElementById('listing-1-timer');
  var modalScreenArrivaltime = document.getElementById('modal-bus-arrivaltime');
  modalScreenArrivaltime.innerHTML = "Arriving in " + mainScreenArrivaltime.innerHTML + " - Headed East";

  document.getElementById('selected-route-container').style.display = "block";
}

function busListing2() {
  var mainScreenBusNumber = document.getElementById('bus-number-2');
  var modalScreenBusNumber = document.getElementById('modal-bus-number');
  modalScreenBusNumber.innerHTML = mainScreenBusNumber.innerHTML;

  var mainScreenDestination = document.getElementById('bus-destination-2');
  var modalScreenDestination = document.getElementById('modal-bus-destination');
  modalScreenDestination.innerHTML = "Bus to " + mainScreenDestination.innerHTML;

  var mainScreenArrivaltime = document.getElementById('listing-2-timer');
  var modalScreenArrivaltime = document.getElementById('modal-bus-arrivaltime');
  modalScreenArrivaltime.innerHTML = "Arriving in " + mainScreenArrivaltime.innerHTML + " - Headed East";

  document.getElementById('selected-route-container').style.display = "block";
}

function busListing3() {
  var mainScreenBusNumber = document.getElementById('bus-number-3');
  var modalScreenBusNumber = document.getElementById('modal-bus-number');
  modalScreenBusNumber.innerHTML = mainScreenBusNumber.innerHTML;

  var mainScreenDestination = document.getElementById('bus-destination-3');
  var modalScreenDestination = document.getElementById('modal-bus-destination');
  modalScreenDestination.innerHTML = "Bus to " + mainScreenDestination.innerHTML;

  var mainScreenArrivaltime = document.getElementById('listing-3-timer');
  var modalScreenArrivaltime = document.getElementById('modal-bus-arrivaltime');
  modalScreenArrivaltime.innerHTML = "Arriving in " + mainScreenArrivaltime.innerHTML + " - Headed North";

  document.getElementById('selected-route-container').style.display = "block";
}

function busListing4() {
  var mainScreenBusNumber = document.getElementById('bus-number-4');
  var modalScreenBusNumber = document.getElementById('modal-bus-number');
  modalScreenBusNumber.innerHTML = mainScreenBusNumber.innerHTML;

  var mainScreenDestination = document.getElementById('bus-destination-4');
  var modalScreenDestination = document.getElementById('modal-bus-destination');
  modalScreenDestination.innerHTML = "Bus to " + mainScreenDestination.innerHTML;

  var mainScreenArrivaltime = document.getElementById('listing-4-timer');
  var modalScreenArrivaltime = document.getElementById('modal-bus-arrivaltime');
  modalScreenArrivaltime.innerHTML = "Arriving in " + mainScreenArrivaltime.innerHTML + " - Headed South";

  document.getElementById('selected-route-container').style.display = "block";
}

function busListing5() {
  var mainScreenBusNumber = document.getElementById('bus-number-5');
  var modalScreenBusNumber = document.getElementById('modal-bus-number');
  modalScreenBusNumber.innerHTML = mainScreenBusNumber.innerHTML;

  var mainScreenDestination = document.getElementById('bus-destination-5');
  var modalScreenDestination = document.getElementById('modal-bus-destination');
  modalScreenDestination.innerHTML = "Bus to " + mainScreenDestination.innerHTML;

  var mainScreenArrivaltime = document.getElementById('listing-5-timer');
  var modalScreenArrivaltime = document.getElementById('modal-bus-arrivaltime');
  modalScreenArrivaltime.innerHTML = "Arriving in " + mainScreenArrivaltime.innerHTML + " - Headed South";

  document.getElementById('selected-route-container').style.display = "block";
}

function busListing6() {
  var mainScreenBusNumber = document.getElementById('bus-number-6');
  var modalScreenBusNumber = document.getElementById('modal-bus-number');
  modalScreenBusNumber.innerHTML = mainScreenBusNumber.innerHTML;

  var mainScreenDestination = "Jackson Park Express";
  var modalScreenDestination = document.getElementById('modal-bus-destination');
  modalScreenDestination.innerHTML = "<span style='font-size: 15.3px;'>Bus to " + mainScreenDestination + "</span>";

  var mainScreenArrivaltime = document.getElementById('listing-6-timer');
  var modalScreenArrivaltime = document.getElementById('modal-bus-arrivaltime');
  modalScreenArrivaltime.innerHTML = mainScreenArrivaltime.innerHTML + " - <span style='color:#B82121;'>Reroute in progress</span>";

  document.getElementById('selected-route-container').style.display = "block";
}

function busListing7() {
  var mainScreenBusNumber = document.getElementById('bus-number-7');
  var modalScreenBusNumber = document.getElementById('modal-bus-number');
  modalScreenBusNumber.innerHTML = mainScreenBusNumber.innerHTML;

  var mainScreenDestination = document.getElementById('bus-destination-7');
  var modalScreenDestination = document.getElementById('modal-bus-destination');
  modalScreenDestination.innerHTML = "Bus to " + mainScreenDestination.innerHTML;

  var mainScreenArrivaltime = document.getElementById('listing-7-timer');
  var modalScreenArrivaltime = document.getElementById('modal-bus-arrivaltime');
  modalScreenArrivaltime.innerHTML = "<span style='color:#FFD800;'>" + mainScreenArrivaltime.innerHTML + "</span> " + " Out of service until 12:10 AM";

  document.getElementById('selected-route-container').style.display = "block";
}

function busListing8() {
  var mainScreenBusNumber = document.getElementById('bus-number-8');
  var modalScreenBusNumber = document.getElementById('modal-bus-number');
  modalScreenBusNumber.innerHTML = mainScreenBusNumber.innerHTML;

  var mainScreenDestination = document.getElementById('bus-destination-8');
  var modalScreenDestination = document.getElementById('modal-bus-destination');
  modalScreenDestination.innerHTML = "Bus to " + mainScreenDestination.innerHTML;

  var mainScreenArrivaltime = document.getElementById('listing-8-timer');
  var modalScreenArrivaltime = document.getElementById('modal-bus-arrivaltime');
  modalScreenArrivaltime.innerHTML = "<span style='color:#FFD800;'>" + mainScreenArrivaltime.innerHTML + "</span> " + " Out of service until 12:10 AM";

  document.getElementById('selected-route-container').style.display = "block";
}

function busListing9() {
  var mainScreenBusNumber = document.getElementById('bus-number-9');
  var modalScreenBusNumber = document.getElementById('modal-bus-number');
  modalScreenBusNumber.innerHTML = mainScreenBusNumber.innerHTML;

  var mainScreenDestination = document.getElementById('bus-destination-9');
  var modalScreenDestination = document.getElementById('modal-bus-destination');
  modalScreenDestination.innerHTML = "Bus to " + mainScreenDestination.innerHTML;

  var mainScreenArrivaltime = document.getElementById('listing-9-timer');
  var modalScreenArrivaltime = document.getElementById('modal-bus-arrivaltime');
  modalScreenArrivaltime.innerHTML = "<span style='color:#FFD800;'>" + mainScreenArrivaltime.innerHTML + "</span> " + " Out of service until 6:00 AM";

  document.getElementById('selected-route-container').style.display = "block";
}

//Close modal box
function closeModal() {
  document.getElementById('selected-route-container').style.display = "none";
}
