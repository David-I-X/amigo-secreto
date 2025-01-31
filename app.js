// Seleccionar elementos del DOM
const inputAmigo = document.getElementById('amigo'); // Campo de texto para ingresar nombres
const listaAmigos = document.getElementById('listaAmigos'); // Lista de nombres ingresados
const resultado = document.getElementById('resultado'); // Área para mostrar el resultado del sorteo

// Array para almacenar los nombres
let nombres = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Obtener el valor del campo de texto y eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.'); // Mostrar alerta si el campo está vacío
        return;
    }

    // Agregar el nombre al array
    nombres.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista visual
    actualizarLista();
}

// Función para actualizar la lista visual
function actualizarLista() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';

    // Recorrer el array de nombres y agregarlos a la lista
    nombres.forEach(nombre => {
        const li = document.createElement('li'); // Crear un elemento <li>
        li.textContent = nombre; // Asignar el nombre como contenido del <li>
        li.classList.add('name-item'); // Agregar una clase para estilos (opcional)
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Verificar que haya nombres en la lista
    if (nombres.length === 0) {
        alert('No hay nombres en la lista para sortear.'); // Mostrar alerta si no hay nombres
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombres.length); // Generar un índice aleatorio
    const amigoSecreto = nombres[indiceAleatorio]; // Obtener el nombre correspondiente al índice

    // Mostrar el resultado del sorteo
    resultado.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}