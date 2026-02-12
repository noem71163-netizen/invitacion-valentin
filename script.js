const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
const pantallaInvitacion = document.getElementById('pantalla-invitacion');
const pantallaFinal = document.getElementById('pantalla-final');
const mensajeGuia = document.getElementById('mensaje-guia');

let escalaSi = 1;

const mensajes = [
    "¿De verdad? 🥺",
    "¡Piénsalo bien!",
    "¡No puedes decir que no!",
    "Mira qué grande está el botón SÍ...",
    "¡Dale al SÍ! ❤️"
];
let mensajeIndex = 0;

btnNo.addEventListener('click', () => {
    // 1. Hace que el botón SÍ crezca cada vez más
    escalaSi += 0.5; 
    btnSi.style.transform = `scale(${escalaSi})`;
    
    // 2. Cambia el texto para convencer
    mensajeGuia.innerText = mensajes[mensajeIndex];
    mensajeIndex = (mensajeIndex + 1) % mensajes.length;

    // 3. Opcional: Mueve un poquito el botón NO para que sea más difícil darle
    const randomX = Math.random() * 20 - 10;
    const randomY = Math.random() * 20 - 10;
    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

btnSi.addEventListener('click', () => {
    pantallaInvitacion.classList.add('hidden');
    pantallaFinal.classList.remove('hidden');
});