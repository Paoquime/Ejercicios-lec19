window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var precio = parseFloat(document.getElementById("precio").value);
		var cantidad = parseFloat(document.getElementById("cantidad").value);
		var descuento = parseFloat(document.getElementById("descuento").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El monto es: " + calcular(precio,cantidad,descuento) + "</p>";
	});

	function calcular(precio, cantidad, descuento) {
		var rpta = 0;
		rpta = precio * cantidad;
		if (descuento>0){
			var dsct = rpta * (descuento/100);
			rpta = rpta - dsct;
			return rpta;
		}
		else
			return rpta;
	}
});