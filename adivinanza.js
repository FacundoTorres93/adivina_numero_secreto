const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroAdivinado === numeroSecreto){
        console.log('Felcitaciones!! Adivinaste el número secreto!!');
    }else if(numeroAdivinado > numeroSecreto){
        console.log('El número secreto es menor. Sigue adelante!!');
    }else{
        console.log('El número secreto es mayor. Sigue intentando!');
    }
};

module.exports = {generarNumeroAleatorio, verificarAdivinanza};