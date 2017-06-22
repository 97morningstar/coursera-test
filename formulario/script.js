

var nombre = document.getElementById('names');
var apel = document.getElementById('apel');
var edad = document.getElementById('edad');
var divo = document.getElementById("datos");

var valor1 = nombre.value;
var valor2 = apel.value;
var valor3 = edad.value;


var cosa1 = document.createElement('p');
var cosa2 = document.createElement('p');
var cosa3 = document.createElement('p');
var texto1;
var texto2;
var texto3;

function uno(){
valor3 = edad.value;
valor2 = apel.value;
valor1 = nombre.value;


	if( /\d{1,}/g.test(valor3)){
		if(/[a-z/*-+]{1,}/g.test(valor3)){  //faltan simbolos
			texto3 = "Tu edad contiene letras o simbolos?";	
		}else{
		 	texto3 = "La edad es: " + edad.value;
		}
	}
	else {
		texto3 = "No has introducido numeros en la edad";
	}


if(/[a-z]/ig.test(valor1)){
  if(/\d{1,}/g.test(valor1))
  {
  	texto1 = "Numeros no permitidos en el nombre o cualquier otro caracter que no sea letras";
  }else{
	texto1 = "El nombre es: " + nombre.value;
}
}else{
	texto1 = "Numeros no permitidos en el nombre o cualquier otro caracter que no sea letras";
}

if(/[a-z]/ig.test(valor2)){
  if(/\d{1,}/g.test(valor2))
  {
  	texto2 = "Numeros no permitidos en el apellido o cualquier otro caracter que no sea letras";
  }else{
	texto2 = "El apellido es: " + apel.value;
}
}else{
	texto2 = "Numeros no permitidos en el apellido o cualquier otro caracter que no sea letras";
}

}

function Assignar(){
cosa1.textContent = texto1;
divo.appendChild(cosa1);
cosa2.textContent = texto2;
divo.appendChild(cosa2);
cosa3.textContent = texto3;
divo.appendChild(cosa3);
}

var di = document.getElementById("boton");
if(di.addEventListener){
	di.addEventListener("click", function(){
        uno();
		Assignar();
	}, false);
}
	


