// listen for keyboard down events
document.onkeydown = function(event) {
    const key = document.querySelector(`div[data-code="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-code="${event.keyCode}"]`);
    if (audio) {
        key.classList.add("active");
        audio.currentTime = 0;
        audio.play();
    }
};
document.onkeyup = function(event) {
    const key = document.querySelector(`div[data-code="${event.keyCode}"]`);
    if (key) {
        key.classList.remove("active");
    }
};
