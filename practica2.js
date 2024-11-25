function contarPalabras(palabras) {
    const mapaDePalabras = {};

    palabras.forEach(palabra => {
        if (mapaDePalabras[palabra]) {
            mapaDePalabras[palabra]++;
        } else {
            mapaDePalabras[palabra] = 1;
        }
    });

    return mapaDePalabras;
}


(function iniciarIngresoDePalabras() {
    const palabras = [];
    let input;

   
    do {
        input = prompt("Introduce una palabra (o deja vacío para finalizar):");
        if (input) {
            palabras.push(input.trim());
        }
    } while (input);

    if (palabras.length > 0) {
        const resultado = contarPalabras(palabras);

        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "<h2>Frecuencia de Palabras:</h2>";
        for (const [palabra, frecuencia] of Object.entries(resultado)) {
            resultadoDiv.innerHTML += `<p>${palabra}: ${frecuencia}</p>`;
        }
    } else {
        alert("No se ingresaron palabras.");
    }
})();

