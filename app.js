const readlineSync = require('readline-sync');
const {
    generarNumeroAleatorio,
    verificarAdivinanza
} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresa un numero: ');
};

const juegoAdvinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('Bienvenido a Advina un númro secreto!');
    console.log('Intenta advinar el numero del 1 al 100.\n');

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
}


juegoAdvinanza();