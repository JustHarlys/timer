let cronometroID;
let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometroActivo = false;

function iniciarCronometro() {
    if (!cronometroActivo) {
        cronometroID = setInterval(actualizarCronometro, 1000);
        cronometroActivo = true;
    }
}

function detenerCronometro() {
    clearInterval(cronometroID);
    cronometroActivo = false;
}

function actualizarCronometro() {
    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
        if (minutos >= 60) {
            minutos = 0;
            horas++;
        }
    }
    const tiempoFormateado = `${(horas < 10) ? "0" + horas : horas}:${(minutos < 10) ? "0" + minutos : minutos}:${(segundos < 10) ? "0" + segundos : segundos}`;
    document.getElementById('cronometro').innerText = tiempoFormateado;
}

document.getElementById('boton').addEventListener('click', function() {
    if (cronometroActivo) {
        detenerCronometro();
    } else {
        iniciarCronometro();
    }
});