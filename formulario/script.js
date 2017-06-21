

var nombre = document.getElementById('names');
var apel = document.getElementById('apel');
var edad = document.getElementById('edad');
var divo = document.getElementById("datos");
var cosa1 = document.createElement('p');
var cosa2 = document.createElement('p');
var cosa3 = document.createElement('p');
var texto1;
var texto2;
var texto3;

function uno(){

texto1 = "El nombre es: " + nombre.value;
texto2 = "El apellido es: " + apel.value;
texto3 = "La edad es: " + edad.value;



/*
texto1 = document.createTextNode("El nombre es: " + nombre.value);
texto2 = document.createTextNode("El apellido es: " + apel.value);
texto3 = document.createTextNode("La edad es: " + edad.value);
*/
}

function Assignar(){

cosa1.textContent = texto1;

//cosa1.appendChild(texto1);

divo.appendChild(cosa1);

cosa2.textContent = texto2;

//cosa2.appendChild(texto2);
divo.appendChild(cosa2);

cosa3.textContent = texto3;

//cosa3.appendChild(texto3);
divo.appendChild(cosa3);


}

var di = document.getElementById("boton");
if(di.addEventListener){
	di.addEventListener("click", function(){
        uno();
		Assignar();

		
	}, false);
}
	


