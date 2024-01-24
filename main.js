let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let hoursLabel = document.getElementById("hours");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60) % 60);
    hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600));
}

function pad(val){
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString
    }
}