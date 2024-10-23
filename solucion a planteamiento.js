document.getElementById('solver-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const respuestaUsuario = document.getElementById('respuesta').value;
    const feedback = document.getElementById('feedback');
    const sugerenciasSection = document.getElementById('sugerencias');
    const pasosList = document.getElementById('pasos');

    // Respuesta correcta de la ecuación cuadrática (resuelta manualmente)
    const solucionesCorrectas = [3, -1]; // Soluciones de 2x^2 - 4x - 6 = 0
    let usuarioSolucion = parseFloat(respuestaUsuario);

    if (isNaN(usuarioSolucion)) {
        feedback.textContent = "Por favor, introduce un número válido.";
        feedback.style.color = "red";
        return;
    }

    if (solucionesCorrectas.includes(usuarioSolucion)) {
        feedback.textContent = "¡Correcto! Has encontrado una de las soluciones.";
        feedback.style.color = "green";
        mostrarSugerencias(pasosList, sugerenciasSection);
    } else {
        feedback.textContent = "Respuesta incorrecta. Revisa tus cálculos.";
        feedback.style.color = "red";
        mostrarSugerencias(pasosList, sugerenciasSection);
    }
});

function mostrarSugerencias(pasosList, sugerenciasSection) {
    sugerenciasSection.style.display = "block";

    // Borrar pasos anteriores
    pasosList.innerHTML = '';

    const pasos = [
        "Paso 1: Identifica los coeficientes en la ecuación: a = 2, b = -4, c = -6.",
        "Paso 2: Usa la fórmula general: x = (-b ± √(b² - 4ac)) / 2a.",
        "Paso 3: Calcula el discriminante: b² - 4ac = (-4)² - 4(2)(-6) = 16 + 48 = 64.",
        "Paso 4: Aplica la raíz cuadrada: √64 = 8.",
        "Paso 5: Sustituye en la fórmula: x = (4 ± 8) / 4.",
        "Paso 6: Calcula las dos soluciones: x1 = (4 + 8) / 4 = 3, y x2 = (4 - 8) / 4 = -1."
    ];

    pasos.forEach(function(paso) {
        let li = document.createElement('li');
        li.textContent = paso;
        pasosList.appendChild(li);
    });
}
