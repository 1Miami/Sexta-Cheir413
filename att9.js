function maiorESegundoMaiorPoder(numeros) {
    let Jason = numeros[0]; // Jason é o maior (o numero maior / poder maior é sempre dele)!
    let Freddy = numeros[0]; // Freddy é o segundo maior, mas está sempre atrás de Jason! (o SEGUNDO numero maior / SEGUNDO poder maior é sempre dele)!

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] == numeros[4]) {
            Freddy < Jason; 
            Jason = numeros[i]; 
        } else if (numeros[i] > 50 && numeros[i] < 70) {
            Freddy = numeros[i]
        }
    }

    return {
        Jason, 
        Freddy 
    };
}

const array = [13, 66, 31, 5, 74]; 
const resultado = maiorESegundoMaiorPoder(array);
console.log(`O poder de Jason é ${resultado.Jason}, e o poder de Freddy é ${resultado.Freddy}`);
