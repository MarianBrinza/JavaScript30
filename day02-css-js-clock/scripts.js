const hourHand = document.querySelector(".hours");
const minutesHand = document.querySelector(".minutes");
const secondsHand = document.querySelector(".seconds");

setInterval(setClock, 1000);

function setRotation(element, rotation) {
  element.style.setProperty("--rotation", rotation * 360);
}

function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;
  setRotation(hourHand, hours);
  setRotation(minutesHand, minutes);
  setRotation(secondsHand, seconds);
}
setClock();
