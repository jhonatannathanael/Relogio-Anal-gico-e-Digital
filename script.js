// Variavel para o relogio digital
let digitalElement = document.querySelector('.digital');
// Variavel para os segundos do relogio analogico
let sElement = document.querySelector('.p_s');
// Variavel para os minutos do relogio analogico
let mElement = document.querySelector('.p_m');
// Variavel para as horas do relogio analogico
let hElement = document.querySelector('.p_h');

// Principal
function updateClock() {
// Relógio digital
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)} :${fixZero(minute)} :${fixZero(second)}`;
// Relógio analógico
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

// Definindo o style
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform  = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

// Função para o relogio automatico
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

// Atualização da página a  cada 1 Segundo
setInterval(updateClock), 1000;
// Função do relógio analógico 
updateClock();