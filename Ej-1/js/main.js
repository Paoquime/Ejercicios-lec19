window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var cambio = parseFloat(document.getElementById("cambio").value);
		var monto = parseFloat(document.getElementById("monto").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El cambio es " + tipoDeCambio(cambio,monto) + "</p>";
	});

	function tipoDeCambio(numero1, numero2) {
		return numero1 * numero2;
	}
});
