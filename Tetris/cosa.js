// The size of the table.

// Loop counters./*
/*
var i, j;

// Set the length of the array to iMaxNum + 1. 
// The first array index is zero, not 1.
var MultiplicationTable = new Array(iMaxNum + 1);

// Loop for each major number (each row in the table)
for (i = 1; i <= iMaxNum; i++)
{
    // Create the columns in the table
    MultiplicationTable[i] = new Array(iMaxNum + 1);

    // Fill the row with the results of the multiplication
    for (j = 1; j <= iMaxNum; j++)
    {
        MultiplicationTable[i][j] = i * j;
    }
}

for(var i = 1; i <= iMaxNum; i++){
	for(var j = 1 ; j <= iMaxNum; j++){
		document.write(MultiplicationTable[i][j] + " ");
		
	}
	document.write("<br/>");
}*/

var iMaxNum = 14;
var tablero; 
var uno;
var moviendokey = false;
var sube = 0;
var termino1 = false;
var termino2 = false;
var termino3 = false;
var termino4 = false;
var f;
var c;


var fichas0 = [];
var fichas1 = [];
var fichas2 = [];
var fichas3 = [];



var ran = 2;

var pintarArray = [];
var divp;
var s;


function setup() {
createCanvas(450, 700);
frameRate(5);

	for(var i = 0 ; i < 60; i++){
	  fichas0[i] = new Ficha0();
	}
	for(var i = 0 ; i < 60; i++){
	  fichas1[i] = new Ficha1();
	}
	for(var i = 0 ; i < 60; i++){
	  fichas2[i] = new Ficha2();
	}
	for(var i = 0 ; i < 60; i++){
	  fichas3[i] = new Ficha3();
	}


		//creando la matriz (filas)
		tablero = new Array(50 + 1);
		//creando las columnas
		for (c = 1; c <= 50; c++)
		{
		    tablero[c] = new Array(iMaxNum + 1);
			     for (f = 1; f <= 50; f++)
				    {
				        tablero[c][f] = 0;
				    }
		}

		divp = document.querySelector("div#punto");
 s = document.getElementById("puntos");

}

var con0 = 0;
var con1 = 0;
var con2 = 0;
var con3 = 0;



var aux = 0;
var j = 0;
var i;

/*funcion auxiliar para borrar despues*/
function imprimir() {
	
	for(var i = 1; i <= 14; i++){
		var s = "";
	for(var j = 1 ; j <= 9; j++){
		s+=tablero[j][i] + " ";
	//	console.log(tablero[i][j] + " ");
		
	}
	console.log(s);
	console.log('\n');

}
console.log('\n');
}

var pinto = true;
var SeAcaboEljuego = false;
var empezo = false;

function turnON(){

if(!empezo){
	empezo=true;

var titulo = document.querySelector("div#tetris p");
	titulo.style.display = "none";
	var boton = document.querySelector("button#start");
	boton.style.display = "none";

}
else if(empezo){
   empezo=false;
}

}


var puntuacion = 0;

function draw() {
	background(51);
	console.log("voy");
	


if(empezo){
	divp.style.display = "block";
	divp.innerHTML = puntuacion;
	s.style.display = "none";

	if(SeAcaboEljuego){
	//	document.write("HAS PERDIDO!!!!!");
	var titulo = document.querySelector("div#tetris p");
	titulo.style.display = "block";
	var boton  = document.querySelector("button#start");
	boton.textContent = "Otra?";
	boton.style.display = "block";
	divp.style.display = "none";
	
	s.textContent += " " + puntuacion;
	s.style.display = "block";



                 /*Limpiando*/
		empezo=false;
		aux=0;
		
		SeAcaboEljuego = false;
		con0 = 0;
		con1 = 0;
		con2 = 0;
		con3 = 0;
		puntuacion = 0;
		j = 0;

							
							//creando las columnas
							for (c = 1; c <= 50; c++)
							{
								     for (f = 1; f <= 50; f++)
									    {
									        tablero[c][f] = 0;
									    }
							}

				for(var y = 0; y < 100; y++){
					pintarArray[y]	= null;		
				}

					for(var i = 0 ; i < 60; i++){
					  fichas0[i] = new Ficha0();
					}
					for(var i = 0 ; i < 60; i++){
					  fichas1[i] = new Ficha1();
					}
					for(var i = 0 ; i < 60; i++){
					  fichas2[i] = new Ficha2();
					}
					for(var i = 0 ; i < 60; i++){
					  fichas3[i] = new Ficha3();
					}



	}
else if(aux < 60 && !SeAcaboEljuego){
EliminarFila();
console.log(ran);
	if(ran==2){

	 uno = fichas0[con0];

	   uno.shows();
	     uno.hitsDown();
	   uno.move();

   
	   
			if(termino1){
				uno.seAcabo();

				terminoDONDE(uno); 
			    pintarArray[aux] = uno;
				con0++;
				termino1=false;
				aux++;
				imprimir();
			
					//random ficha
			ran = Math.floor(Math.random() * (4-0)+0);
			}
}
	if(ran==0){
        
			uno = fichas2[con2];

	   uno.shows();

	  // muevo si puedo :'v 
       uno.hitsDown();

	   uno.move();

   
	   
			if(termino1){
					
				uno.seAcabo();

				terminoDONDE(uno); 
			    pintarArray[aux] = uno;
				con2++;
				termino1=false;
				aux++;
				imprimir();
					//random ficha
			ran = Math.floor(Math.random() * (4-0)+0);
			//ran=1;
			}
		}
	if(ran==3){
		 uno = fichas1[con1];

	   uno.shows();
	     uno.hitsDown();
	   uno.move();

   
	   
			if(termino1){
					
				uno.seAcabo();

				terminoDONDE(uno); 
			    pintarArray[aux] = uno;
				con1++;
				termino1=false;
				aux++;
				imprimir();
					//random ficha
			ran = Math.floor(Math.random() * (4-0)+0);
			//ran=2;
			}
		}
	if(ran==1){
		uno = fichas3[con3];

	   uno.shows();
	    uno.hitsDown();
	   uno.move();

   
	   
			if(termino1){
					
				uno.seAcabo();

				terminoDONDE(uno); 
			    pintarArray[aux] = uno;
				con3++;
				termino1=false;
				aux++;
				imprimir();
					//random ficha
			ran = Math.floor(Math.random() * (4-0)+0);
			}
	}



				for(i = 0; i < pintarArray.length; i++)
				{
					if(pintarArray[i]!=null){
						pintarArray0F(pintarArray[i]);
					}
				}
				//llenar la matriz con 1s
		

}

}
}

function EliminarFila() {

var check;
var i;
var j;
var auxi;
var lastX;
	for(i = 1; i <= 14; i++){
		check = 0;
		for(j = 1 ; j <= 9; j++){
            if(tablero[j][i]===1)
            {
            	check++;
            	
            	if(check===9){
            		auxi = i;
            		lastX=j;
            		break;
            	}
     
            }
		}
		/*eliminar del tablero y correr a todos los elementos hacia abajo*/
		if(check===9)
		{
			puntuacion+=100;
			


			console.log("si **********************************************************************************");
			console.log(auxi);
			/*despues veo como la puedo poner de otro color*/
			for(var t = 1; t <= 9; t++){  /*quitando del tablero*/
				tablero[t][i]=0;
				console.log("Llene de 0s");
			}
		console.log("matriz con la fila en 0");
		imprimir();
					for(var p = auxi; p >= 1; p--){
						for(var o = 9 ; o >=1; o--){
				            if(tablero[o][p]===1)
				            	{
				                  console.log("Es 1");
				                  console.log("pongo 0 y reemplazo a la y+1");
                                    
				            		tablero[o][p]=0;
				            		tablero[o][p+1]=1;
				          		 }
						}
					}
					console.log("matriz con los 1s de arriba desplazados hacia abajo")
						imprimir();
                   
                   for(var w = pintarArray.length-1; w >=0; w--){
                   	if(pintarArray[w]!=null){
                   		if(pintarArray[w].y1===(auxi*50-50)){
                   			pintarArray[w].y1 = 10000;
                   		} 
                   		if( pintarArray[w].y2===(auxi*50-50)){
                   			pintarArray[w].y2 = 10000;
                   		}
                   		if( pintarArray[w].y3===(auxi*50-50)){
                   			pintarArray[w].y3 = 10000;
                   		}if( pintarArray[w].y4===(auxi*50-50)){
                   			pintarArray[w].y4 = 10000;
                   		}
                   	}
                   }
                   for(var w = pintarArray.length-1; w >=0; w--){
                   		if(pintarArray[w]!=null){
                   		if(pintarArray[w].y1 <(auxi*50-50)){
                   			pintarArray[w].y1+=50;
                   			console.log("hay");
                   		} 
                   		if( pintarArray[w].y2<(auxi*50-50)){
                   			console.log("hay");
                   			pintarArray[w].y2+=50;
                   			

                   		}
                   		if( pintarArray[w].y3<(auxi*50-50)){
                   			console.log("hay");
                   				pintarArray[w].y3+=50;
                   		}
                   		if( pintarArray[w].y4<(auxi*50-50)){
                   			console.log("hay");
                   				pintarArray[w].y4+=50;
                   			
                   		}
                   	}
                   }




            }

		}

	}


function terminoDONDE(ficha) {  /*ya solo es necesario llenar la tabla con los valores de la ficha Xs y Ys*/
 /*   if(ficha.color==="rojo"){  /*y faltan las otras fichas con sus colores*/
    /*	console.log("si");*/
    	var d = ficha.x1;
    	if(ficha!=null){
    	if(d===0){
        	tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
	    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
    	}
    	else if(d===50){
    			tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
        }else if(d===100){

    		tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
    	}else if(d===150){
    		tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
    	}else if(d===200){
    			tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
    	}else if(d===250){
    			tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
    	}else if(d===300){
    			tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
    	}else if(d===350){
    			tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
    	}
    	else if(d===400){
    			tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
    	}
    	else if(d===450){
    			tablero[(ficha.x1/50)+1][(ficha.y1/50)+1] = 1;
    		tablero[(ficha.x2/50)+1][(ficha.y2/50)+1] = 1;
    		tablero[(ficha.x3/50)+1][(ficha.y3/50)+1] = 1;
    		if(ficha.color==="verde" || ficha.color==="morado"){
	    	    tablero[(ficha.x4/50)+1][(ficha.y4/50)+1] = 1;
	    	    }
    	}
    }
   /* }else if(d===9999){

    }*/
}




//crash down y despue derecha e izquierda
function crash(ficha){
  if(ficha.color==="rojo"){

  }


}

// pintar las que ya esten

function pintarArray0F (ficha){
colores(ficha.color);

if(ficha.color==="rojo"){
   rect(ficha.x1, ficha.y1, 50, 50);
   rect(ficha.x2, ficha.y2, 50, 50);
   rect(ficha.x3, ficha.y3, 50, 50);
}
else if(ficha.color==="azul"){
   rect(ficha.x1, ficha.y1, 50, 50);
   rect(ficha.x2, ficha.y2, 50, 50);
   rect(ficha.x3, ficha.y3, 50, 50);
}else if(ficha.color==="verde"){
   rect(ficha.x1, ficha.y1, 50, 50);
   rect(ficha.x2, ficha.y2, 50, 50);
   rect(ficha.x3, ficha.y3, 50, 50);
   rect(ficha.x4, ficha.y4, 50, 50);
}
else if(ficha.color==="morado"){
   rect(ficha.x1, ficha.y1, 50, 50);
   rect(ficha.x2, ficha.y2, 50, 50);
   rect(ficha.x3, ficha.y3, 50, 50);
   rect(ficha.x4, ficha.y4, 50, 50);
}
}

//tengo un pequeño bug aqui que necesito solucionar luego
function keyPressed(){

		  	if(empezo){
			if(!termino1 && !uno.termino){
					volver();
					estado1();
			    }
			}


}

//funcion de los colores
function colores(color){
	if(color==="rojo"){
		return 	fill(255, 0, 0);
	}
	else if(color === "azul"){
		return 	fill(0, 0, 255);
	}else if(color==="verde"){
		return 	fill(0, 255, 0);
	}
	else if(color==="morado"){
		return 	fill(90, 25, 100);
	}
}


//keypressed estados
//estado #1
function estado1(){

    
	if(keyCode === RIGHT_ARROW){
				 uno.control(0);
	     }else if(keyCode === LEFT_ARROW){
			     uno.control(1); 
		 }

}

function estado2(){
	uno.move();
	moviendokey = false;
}
function volver(){
	sube++;
		if(sube===1){
			uno.y1 -= 50;
			uno.y2 -= 50;
			uno.y3 -= 50;
			uno.y4 -= 50;
		}

}

function Ficha0(){       /*arreglar las demas fichas para que sean de 50 x 50*/
	this.color = "rojo";
	this.x1 = 150;
	this.y1 = 0-100;
	this.x2 = 150;
	this.y2 = 50-100;
	this.x3 = 200;
	this.y3 = 50-100;
	this.x4 = 10000;
	this.y4 = 10000;
	this.termino = false;
	this.hit = false;

		this.shows = function (){
			fill(255, 0, 0);
		    rect(this.x1, this.y1, 50, 50);
		    rect(this.x2, this.y2, 50, 50);
		    rect(this.x3, this.y3, 50, 50);
		}

		this.move = function (){
		
				if(this.y2 < height-50 && this.y3 < height-50){
					this.y1 += 50;
					this.y2 += 50;
					this.y3 += 50;
				}
				else{
					this.termino = true;
					termino1 = true;
				}
					
				sube=0;
			}

		this.control = function (x){
		    if(x===0){

		    if(this.x3 < width-50){

		    	this.x1 += 50;
				this.x2 += 50;
				this.x3 += 50;
		    }
		    }else if(x===1){
			    if(this.x1 > 0 && this.x2 > 0){
			    	this.x1 -= 50;
					this.x2 -= 50;
					this.x3 -= 50;
			    }
		    }
		}

		this.hitsDown = function (){   /*falta hitsleft y hits right*/
			if(tablero[(this.x2/50)+1][((this.y2+50)/50)+1]===1 || tablero[(this.x3/50)+1][((this.y3+50)/50)+1]===1 )
				{
					volver();
					sube=0;
					termino1 = true;
					this.termino = true;
					this.hit = true;
				}
		}

		this.seAcabo = function () {
				
this.p = 0;
				for (var f = 1; f <= 50; f++)
							{
								     for (var c = 1; c <= 50; c++)
									    {
									        if(tablero[c][f]===1){
									        	this.p++;
									        	break;
									        }
									    }

									    if(this.p===14){
									    	SeAcaboEljuego=true;
									    	console.log("**************SE ACABO**********");
									    	for (c = 1; c <= 50; c++)
												{
												     for (f = 1; f <= 50; f++)
													    {
													        tablero[c][f] = 0;
													    }
												}
									    }
							}

								
								     
		}
}

function Ficha1(){
	this.color = "azul";

	this.x1 = 100;
	this.y1 = 0-100;
	this.x2 = 150;
	this.y2 = 0-100;
	this.x3 = 200;
	this.y3 = 0-100;
	this.x4 = 10000;
	this.y4 = 10000;
	this.hit = false;

	this.termino = false;

		this.shows = function (){
			fill(0, 0, 255);
		    rect(this.x1, this.y1, 50, 50);
		    rect(this.x2, this.y2, 50, 50);
		    rect(this.x3, this.y3, 50, 50);
		}

		this.move = function (){

			if(this.y2 < height-50 && this.y3 < height-50){
				this.y1 += 50;
				this.y2 += 50;
				this.y3 += 50;
			}
			else{
				this.termino = true;
				termino1 = true;
			}
				sube=0;
			}

		this.control = function (x){
		    if(x===0){

		    if(this.x3 < width-50){

		    	this.x1 += 50;
				this.x2 += 50;
				this.x3 += 50;
		    }
		    }else if(x===1){
			    if(this.x1 > 0 && this.x2 > 0){
			    	this.x1 -= 50;
					this.x2 -= 50;
					this.x3 -= 50;
			    }
		    }
		}

		this.hitsDown = function (){
			if(tablero[(this.x1/50)+1][((this.y1+50)/50)+1]===1 || tablero[(this.x2/50)+1][((this.y2+50)/50)+1]===1 || tablero[(this.x3/50)+1][((this.y3+50)/50)+1]===1 )
				{
					volver();
					sube=0;
					termino1 = true;
					this.termino = true;
					this.hit = true;
				}
		}

		this.seAcabo = function () {
			
				
			
this.p = 0;
				for (var f = 1; f <= 50; f++)
							{
								     for (var c = 1; c <= 50; c++)
									    {
									        if(tablero[c][f]===1){
									        	this.p++;
									        	break;
									        }
									    }

									    if(this.p===14){
									    	SeAcaboEljuego=true;
									    		console.log("**************SE ACABO**********");
									    		for (c = 1; c <= 50; c++)
												{
												     for (f = 1; f <= 50; f++)
													    {
													        tablero[c][f] = 0;
													    }
												}
									    }
							}
							

		}
}

function Ficha2(){
	this.color = "verde";

	this.x1 = 100;
	this.y1 = 0-100;
	this.x2 = 150;
	this.y2 = 0-100;
	this.x3 = 100;
	this.y3 = 50-100;
	this.x4 = 150;
	this.y4 = 50-100;
	this.hit = false;

	this.termino = false;

		this.shows = function (){
			fill(0, 255, 0);
		    rect(this.x1, this.y1, 50, 50);
		    rect(this.x2, this.y2, 50, 50);
		    rect(this.x3, this.y3, 50, 50);
		    rect(this.x4, this.y4, 50, 50);


		}

		this.move = function (){

			if(this.y2 < height-50 && this.y3 < height-50){
				this.y1 += 50;
				this.y2 += 50;
				this.y3 += 50;
				this.y4 += 50;

			}
			else{
				termino = true;
				termino1 = true;
			}
				sube=0;
			}

		this.control = function (x){
		    if(x===0){

		    if(this.x3 < width-50){

		    	this.x1 += 50;
				this.x2 += 50;
				this.x3 += 50;
				this.x4 += 50;

		    }
		    }else if(x===1){
			    if(this.x1 > 0 && this.x2 > 0){
			    	this.x1 -= 50;
					this.x2 -= 50;
					this.x3 -= 50;
					this.x4 -= 50;

			    }
		    }
		}

			this.hitsDown = function (){
			if(tablero[(this.x4/50)+1][((this.y4+50)/50)+1]===1 || tablero[(this.x3/50)+1][((this.y3+50)/50)+1]===1 )
				{
					volver();
					sube=0;
					termino1 = true;
					this.termino = true;
					this.hit = true;
				}
		}

		this.seAcabo = function () {
			
this.p = 0;
				for (var f = 1; f <= 50; f++)
							{
								     for (var c = 1; c <= 50; c++)
									    {
									        if(tablero[c][f]===1){
									        	this.p++;
									        	break;
									        }
									    }

									    if(this.p===14){
									    	SeAcaboEljuego=true;
									    		console.log("**************SE ACABO**********");
									    		for (c = 1; c <= 50; c++)
												{
												     for (f = 1; f <= 50; f++)
													    {
													        tablero[c][f] = 0;
													    }
												}
									    }
							}
								
		}
}

function Ficha3(){
	this.color = "morado";

	this.x1 = 150;
	this.y1 = 0-100;
	this.x2 = 200;
	this.y2 = 0-100;
	this.x3 = 250;
	this.y3 = 0-100;
	this.x4 = 200;
	this.y4 = 50-100;
	this.hit = false;

	this.termino = false;

		this.shows = function (){
			fill(90, 25, 100);
		    rect(this.x1, this.y1, 50, 50);
		    rect(this.x2, this.y2, 50, 50);
		    rect(this.x3, this.y3, 50, 50);
		    rect(this.x4, this.y4, 50, 50);


		}

		this.move = function (){


			if(this.y4 < height-50 ){
				this.y1 += 50;
				this.y2 += 50;
				this.y3 += 50;
				this.y4 += 50;

			}
			else{
				termino = true;
				termino1 = true;
			}
				sube=0;

			}

		this.control = function (x){
		    if(x===0){

		    if(this.x3 < width-50){

		    	this.x1 += 50;
				this.x2 += 50;
				this.x3 += 50;
				this.x4 += 50;

		    }
		    }else if(x===1){
			    if(this.x1 > 0 && this.x2 > 0){
			    	this.x1 -= 50;
					this.x2 -= 50;
					this.x3 -= 50;
					this.x4 -= 50;

			    }
		    }
		}
		this.hitsDown = function (){
			if(tablero[(this.x1/50)+1][((this.y1+50)/50)+1]===1 || tablero[(this.x4/50)+1][((this.y4+50)/50)+1]===1 || tablero[(this.x3/50)+1][((this.y3+50)/50)+1]===1 )
				{
					volver();
					sube=0;
					termino1 = true;
					this.termino = true;
					this.hit = true;
				}
		}

		this.seAcabo = function () {

				
this.p = 0;
				for (var f = 1; f <= 50; f++)
							{
								     for (var c = 1; c <= 50; c++)
									    {
									        if(tablero[c][f]===1){
									        	this.p++;
									        	break;
									        }
									    }
									    if(this.p===14){
									    	SeAcaboEljuego=true;
									    	console.log("**************SE ACABO**********");
										    	for (c = 1; c <= 50; c++)
												{
												     for (f = 1; f <= 50; f++)
													    {
													        tablero[c][f] = 0;
													    }
												}
									    }
							}

		}
		}
