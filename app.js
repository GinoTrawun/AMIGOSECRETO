// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo (){
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim(); // Toma el valor y se eliminan los espacios en blanco

    if (nombre){ // Se verifica si el nombre no esta vacio
        amigos.push(nombre); //Se agrega el nombre al arreglo
        amigoInput.value =''; // Limpia el campo texto una vez ingresado el nombre al arreglo
        console.log(amigos);
        mostrarAmigos(); //Actualiza la lista de amigos
    } else {  
        alert("Por favor, ingresa un nombre."); // Mensaje de error  
    } 
}

function mostrarAmigos (){  
        let lista = document.getElementById('listaAmigos'); // Referencia a la lista en el DOM  
        lista.innerHTML = ''; // Limpiar la lista cada vez que se llama la función  
    
        amigos.forEach(function(amigo) { // Iterar sobre el arreglo de amigos  
            let listaAmigos = document.createElement('li'); // Crear un nuevo elemento <li>  
            listaAmigos.textContent = amigo; // Establecer el texto del <li> como el nombre del amigo  
            lista.appendChild(listaAmigos); // Agregar el <li> a la lista <ul>  
        });  
    }  

function sortearAmigo(){
    if(amigos.length > 0){
        let sorteo = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos [sorteo];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>${amigoSorteado} ha sido sorteado como tu amigo secreto!</li>`;
    }else{
        alert('No Hay Amigos para sortear');
    }
}