function recolectarPalabras() {
    const palabras = new Set();

    while (true) {
        const palabra = window.prompt("Introduce una palabra (deja vacío para terminar):");

        if (palabra === null || palabra.trim() === "") break;
        palabras.add(palabra.trim().toLowerCase());
    }

    const resultado = [...palabras].sort((a, b) => b.localeCompare(a, 'es'));

    mostrarResultado (resultado);
} 



function mostrarResultado(resultado) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = resultado.length ? `<p>Palabras ordenadas: ${resultado.join(", ")}</p>` : "<p>No se ingresaron palabras.</p>";
}





