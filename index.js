const button = document.getElementById('btn-resolver');
const resultadoDiv = document.getElementById("resultado-div");
var funcion;
var n = 0;
var limInfe = 0;
var limSupe = 0;
var anchoRectangulo = 0;
var limitesRectangulos=[];
var puntosMedios = [0];
var valores = [0];
let sumatoria = 0;
var resultado;


button.addEventListener("click" , function () {
	InicializarDatos();

	Desarrollo();
	


})

function InicializarDatos () {
	funcion = document.getElementById("funcion-input").value;
 	n = document.getElementById("n-input").value;
 	limInfe = parseFloat(document.getElementById("limInfe-input").value);
 	limSupe = document.getElementById("limSupe-input").value;
}

function Desarrollo () {
	anchoRectangulo = (limSupe - limInfe)/n;
	console.log(anchoRectangulo)
	console.log(limInfe)

	for (let i=0 ; i<=n ; i++) {

		let limite = limInfe + (i*anchoRectangulo);
		limite = limite.toFixed(2);
		limite = parseFloat(limite)

		limitesRectangulos.push(limite);

	}


	for (let v=0 ; v<=n ; v++){

		let puntoMedio = parseFloat(parseFloat(limitesRectangulos[v]) + parseFloat(limitesRectangulos[v+1])).toFixed(2);

		puntoMedio = puntoMedio/2;
		puntosMedios.push(puntoMedio);
		console.log(puntoMedio)
	}


	for (let c=1 ; c<=n ; c++ ){
		funcion = funcion.replace("x" , puntosMedios[c]);
		funcion = funcion.replace("x" , puntosMedios[c]);
		funcion = funcion.replace("x" , puntosMedios[c]);
		funcion = funcion.replace("x" , puntosMedios[c]);
		funcion = funcion.replace("x" , puntosMedios[c]);
		resultado = math.evaluate(funcion);
		resultado = parseFloat(resultado).toFixed(5);
		console.log(resultado)
		valores.push(resultado);
		funcion = document.getElementById("funcion-input").value;
	}

	for (let w=1 ; w<=n ; w++){
		sumatoria = sumatoria + parseFloat(valores[w]); 
	}
	sumatoria = parseFloat(sumatoria).toFixed(5);
	resultado = anchoRectangulo * sumatoria;
	resultado = parseFloat(resultado).toFixed(5);
	console.log(sumatoria);
	console.log(resultado);
	var h1 = document.createElement("h1");
	h1.innerHTML = "El resultado es: " + resultado;
	resultadoDiv.appendChild(h1);

}




