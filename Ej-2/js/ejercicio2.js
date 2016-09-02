window.addEventListener("load", function() {
	var rpta = document.getElementById("horaperu");
	rpta.innerHTML = "<p>La hora peruana es: " + zonaHoraria(0) + "</p>";

	var boton = document.getElementById("mostrar");
	boton.addEventListener("click", function() {
		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>La hora es " + zonaHoraria(5) + "</p>";
	});

	function zonaHoraria(diferencia){
	var horaActual = new Date();
	var hora = horaActual.getHours();
	var minuto = horaActual.getMinutes();
	var segundo = horaActual.getSeconds();

	var imprimir = (hora+diferencia) + " :" + minuto + " :" + segundo;
	return imprimir;
}
});
