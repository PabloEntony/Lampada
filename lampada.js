const ligarLamp = document.getElementById ( 'ligarLamp' );
const desligarLamp = document.getElementById ( 'desligarLamp' );
const lamp = document.getElementById ( 'lamp' );

function ativarLamp  () {
    lamp.src = './img/ligada.jpg';
}
function desativarLamp (){
    lamp.src = './img/desligada.jpg';
}

ligarLamp.addEventListener ( 'click', ativarLamp );
desligarLamp.addEventListener ( 'click', desativarLamp);
