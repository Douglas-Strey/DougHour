var noon = 12;

function showCurrentTime() {
    // Mostrar o horário na tela
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // setar horas
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // setar minutos
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    //setar segundos
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // juntando os dados do relógio para mostrar na tela
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    $("#clock").html(clockTime);
};

showCurrentTime();

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);