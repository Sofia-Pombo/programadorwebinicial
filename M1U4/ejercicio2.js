const numeros = [25, 506, 13, 784, 1587, 155];
let mayor = 0;

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

document.write("El número mayor es " + mayor, ".");