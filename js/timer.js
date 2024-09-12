document.addEventListener("DOMContentLoaded", () => {
  let seconds = 0;
  let minutes = 0;
  let hours = 2;

  const timerElement = document.getElementById("timer");

  function updateTimer() {
    if (seconds === 0 && minutes === 0 && hours === 0) {
      clearInterval(timerInterval);
      alert("Час вичерпано!");
      return;
    }

    if (seconds === 0) {
      seconds = 59;
      if (minutes === 0) {
        minutes = 59;
        hours--;
      } else {
        minutes--;
      }
    } else {
      seconds--;
    }

    timerElement.textContent =
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds;
  }

  const timerInterval = setInterval(updateTimer, 1000);
});
