
let numeroSecreto = 0;
let numeroIntentos= 0; 
let contadorIntentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

 
function asignarTextoElemento (elemento, texto) {
 let elementoHtml = document.querySelector (elemento);
 elementoHtml.innerHTML = texto;
 return;
}

function verificarIntento () {
 let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);

console.log (numeroIntentos);
 if (numeroDeUsuario === numeroSecreto){
 asignarTextoElemento ('p', `acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos' } `);
 document.getElementById ("reiniciar").removeAttribute ("disabled"); 
 }
 else {

if (numeroDeUsuario > numeroSecreto){
 asignarTextoElemento ('p', 'El numero secreto es menor' );
 }

else {
 asignarTextoElemento ('p', 'El numero secreto es mayor');
 }
 contadorIntentos++
 numeroIntentos++;
 limpiarCaja (); 
 
 }

return;
}

function limpiarCaja () {

document.querySelector ('#valorUsuario'). value = "";
 }

function generarNumeroSecreto () {
 let numeroGenerado =  Math.floor(Math.random ()*numeroMaximo)+1;
 console.log (listaNumerosSorteados);
 console.log (numeroGenerado);

 //si ya todos los numeros fueron sorteados

 if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento ('p', 'ya se sortearon todos los numeros disponibles');

 }

 else {

        // si el numero generado esta incluido en la lista hacemos una operación
        
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }


}
}
function condicionesIniciales (){
 asignarTextoElemento ('h1' , 'juego secreto '); 
 asignarTextoElemento ('p' ,` digite un numero de 1 al ${numeroMaximo}`); 
 numeroSecreto = generarNumeroSecreto ();
 numeroIntentos= 1; 
 contadorIntentos = 1;
 
}
function reiniciarJuego (){
 // limpiar la caja 
 limpiarCaja (); 
 // indicar mensaje de intervalo de numeros
 // inicar el numerto intentos
 condicionesIniciales();
 // generar el numero aleatorio
 // deshabilitar el boton de nuevo juego
 document.getElementById('reiniciar').setAttribute('disabled', 'true')

}

condicionesIniciales(); 