import Countdown from "./countDown.js";


const tempoF = new Countdown("24 April 2022 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo(){
    tempos.forEach((tempo, index) =>{
        tempo.innerHTML = tempoF.total[index];
    });
    
}
mostrarTempo();
setInterval(mostrarTempo,1000);

