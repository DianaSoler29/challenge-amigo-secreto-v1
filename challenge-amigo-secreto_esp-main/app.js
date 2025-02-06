// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres:
// Iniciar declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. Ejemplo:
let amigos = [];
// Implementar una función para agregar amigos:
// Desarrollar una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
// Tareas específicas:
function agregarAmigo(){
    // 1. Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    // 2. Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre personal. Debe ser único, para diferenciar algunos nombres puede agregar al final algunas iniciales de apellidos");
        return; //Detiene la ejecución de la función.
    }
    //Validación del nombre que no esté duplicado.
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre "${nombreAmigo}" ya esta en la lista`);
        return;
    }
    // 3. Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    amigos.push(nombreAmigo);
    // 4. Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    inputAmigo.value = "";
    // Actualizar la lista en HTML
    actualizarLista();
}
// Implementar una función para actualizar la lista de amigos:
// Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
// Tareas específicas:
function actualizarLista(){
    // 1. Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    const listaAmigos = document.getElementById('listaAmigos');
    // 2. Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    listaAmigos.innerHTML = ""; //Borra cualquier contenido previo que esté en el contenedor de la lista.
    // 3. Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    // 4. Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
// Implementar una función para sortear los amigos.
// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
// Tareas específicas:
function sortearAmigo(){
    // Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if(amigos.length === 0){ //Comprobación para el array 'amigos' si está vacío.
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }
    // Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un número aleatorio entre 0 y la longitud del array.
    // Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    const amigoSorteado = amigos[indiceAleatorio]; //Usa el índice aleatorio para obtener un nombre del array.
    // Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`; //Actualiza el contenido del elemento con el nombre sorteado.
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("Click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("Click", sortearAmigo)
});