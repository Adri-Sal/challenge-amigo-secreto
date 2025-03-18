let nombres = [];

//Botones de la página
document.getElementById('agregarNombre').addEventListener('click', agregarAmigo);
document.getElementById('sorteo').addEventListener('click', sortearAmigo);

//Limpiar contenedor de resultados/lista
function limpiarContenedor(idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    while(contenedor. firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

// Agregar nombres
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value.trim(); //Aquí obtenemos los valores ingresados en la caja de texto

    //Verificación del campo vacío
    if (nombreDeAmigo === '') {
    alert('¡Lo siento, debes ingresar un nombre valido!');
    return;
    }

    //Verifica la existencia de datos repetidos
    if(nombres.includes(nombreDeAmigo)) {
        alert('¡Acabas de repetir el nombre!');
        return;
    }

    nombres.push(nombreDeAmigo);
    listarNombres();
    limpiarCaja();
}

//Limipia la caja de texto
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

//Enlistar los nombres ingresados
function listarNombres() {
    const listaDeAmigos = document.getElementById('listaAmigos'); 
    
    //Antes de agregar nuevos elementos, elimina a los previos
    limpiarContenedor ('listaAmigos');

    //Crea la lista de amigos recorriendo los nombres del array
    nombres.forEach((nombre) => {
        const elementoLista = document.createElement ('li'); //Crea un nuevo elemento <li> para cada nombre
        elementoLista.textContent = nombre; // Asigna al nombre como un texto de <li>. Además "textContent" establece o devuelve el contenido de texto de un nodo y sus descendientes, y es más seguro que innerHTML, pues este no interpreta HTML, lo que ayuda a prevenir ataques de inyección de código.
        listaDeAmigos.appendChild(elementoLista); 
    });
}

//Genera un nombre secreto aleatorio
function generarNombreSecreto() {
    if (nombres.length === 0) return ''; //Retorna vacío si no hay nombres
    const seleccionAleatoria = Math.floor(Math.random() * nombres.length); //Genera un número aleatorio dentro del rango de nombres
    return nombres[seleccionAleatoria];
}
//Clicar sorteo / Selección aleatoria / Verificacion del campo vacio
function sortearAmigo() {
    //Verifica la existencia de nombres antes del sorteo
    if (nombres.length === 0) {
        alert('¡Agrega los nombres de tus amigos antes de realizar el sorteo!'); //Nueva verificación
        return;
    }

    let nombreSecreto = generarNombreSecreto();
    if (!nombreSecreto) return; //Al no obtener un nombre se termina la función

    //console.log(nombreSecreto); //Para corroborar que se imprime el nombre secreto correcto

    const resultado = document.getElementById('resultado');
    limpiarContenedor('resultado'); //Elimina los resultados previos

    //Mostrar el resultado del sorteo***
    const itemResultado = document.createElement('li');
    itemResultado.textContent= 'El amigo secreto es: ' + nombreSecreto; // Agrega el nombre secreto al texto del <li>
    resultado.appendChild(itemResultado); // Agrega el resultado <li> al contenedor de resultados
}