// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres de los amigos
let amigos = [];

//Funcion para agregar un amigo
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value;

    //2. Validar la entrada
    if(nombre.trim() === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    //Actualizar el array de amigos
    amigos.push(nombre);

    //Limpiar el campo de entrada
    inputNombre.value = "";

    //Actualizar la lista en al interfaz de usuario 
    actualizarListaAmigos();
}
//Funcion para actualizar la lista de amigos en la interfaz de usuario 
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
/*
    amigos.forEach(amigo => {
        const nuevoAmigo = document.createElement("li");    
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    });*/
}

//Funcion sortear amigo
function sortearAmigo() {
    if(amigos.length === 0) {
        alert("Por favor,agrega amigos antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

