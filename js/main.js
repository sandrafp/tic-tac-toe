// var arreglo1 = ["","",""];
// var arreglo2 = ["","",""];
var arreglo3 = ["X","O"];
var posicion = 0;
var jugador = 0;
var uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve;
uno = $("#uno"); dos = $("#dos"); tres = $("#tres");
cuatro = $("#cuatro"); cinco = $("#cinco"); seis = $("#seis");
siete = $("#siete"); ocho = $("#ocho"); nueve = $("#nueve");


// $(document).ready(function(){
// 	$(".col-xs-4").click(function(){
// 		var espacio = 0;
// 		var completar = $(this);
// 		if (espacio == 0 ) {
// 			completar = arreglo3[0];

// 		}
// 		return completar;
// 	});
// });
// var col = document.getElementsByClassName("col-xs-4");
$(document).ready(function(){
	juego();

});

function juego(){
	posicion = 0;
	$(".col-xs-4").click(function(){

		$(this).text(arreglo3[jugador]);
		$(this).off("click");
		posicion++;
		if(posicion >= 5){
			verganador();
		}
		if( posicion > 8 ){
			swal(
				'Oops...',
				 'es un empate!',
				'error'
			);
			revisar();
		};
		if(jugador == 1){
			jugador = 0;
		}else{
			jugador = 1;
		}
		

	});

}



function verganador(){
	// if((a1.val() == a2.val() && a2.val() == a3.val() && a3.val() != "+") ||
	// 	 (b1.val() == b2.val() && b2.val() == b3.val() && b3.val() != "+") ||
	// 	 (c1.val() == c2.val() && c2.val() == c3.val() && c3.val() != "+") ||
	// 	 (a1.val() == b1.val() && b1.val() == c1.val() && c1.val() != "+") ||
	// 	 (a2.val() == b2.val() && b2.val() == c2.val() && c2.val() != "+") ||
	// 	 (a3.val() == b3.val() && b3.val() == c3.val() && c3.val() != "+") ||
	// 	 (a1.val() == b2.val() && b2.val() == c3.val() && c3.val() != "+") ||
	// 	 (c1.val() == b2.val() && b2.val() == a3.val() && a3.val() != "+") 
	// 	 )
	// {
	if((uno.text() == dos.text() && dos.text() == tres.text() && tres.text() != "+") ||
		 (cuatro.text() == cinco.text() && cinco.text() == seis.text() && seis.text() != "+") ||
		 (siete.text() == ocho.text() && ocho.text() == nueve.text() && nueve.text() != "+") ||
		 (uno.text() == cuatro.text() && cuatro.text() == siete.text() && siete.text() != "+") ||
		 (dos.text() == cinco.text() && cinco.text() == ocho.text() && ocho.text() != "+") ||
		 (tres.text() == seis.text() && seis.text() == nueve.text() && nueve.text() != "+") ||
		 (uno.text() == cinco.text() && seis.text() == nueve.text() && nueve.text() != "+") ||
		 (siete.text() == cinco.text() && seis.text() == tres.text() && tres.text() != "+") 
		 )
	{
		// console.log("Gano el jugador " + arreglo3[jugador]);
		swal(
		  'felicidades!!',
		  arreglo3[jugador] + " ganaste!!" ,
		  'success'
		);
		revisar();
	}
}

function revisar(){
	var col = $(".col-xs-4");
	for (var i = 0; i <= col.length; i++) {
		$(col[i]).text("+");
	}
	posicion = 0;
	jugador = 0;
	juego();
}
