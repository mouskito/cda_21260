$(document).ready(function () {
	$('.resultat').css({
		'display':'none'
	})

	$('form').submit(function(){
		var taille  = $('#taille').val();
		var poids  = $('#poids').val();

		$('#taille').addClass('moussa')
		//Calcul IMC
		var imc = (poids / (taille*taille)).toFixed(1);
		//var imc = (poids / Math.pow(taille,2)).toFixed(1);

		console.log(taille+'---'+imc+'****'+poids);

		if (imc > 0) {

			$('.resultat').css({
				'display':'block'
			});

			$('#imc').css({
				'color':'red',
				'font-size':'5em',
				'text-align':'center'
			})

			$('#imc').text(imc)	
		}

		/*if(imc < 18.5){
			$('#message').text("imc < 18.5: insuffisance pondérale")
		}
		else if(imc > 18.5 && imc < 24.9){
			
			$('#message').text("imc > 18.5 && imc < 24.9: poids normal")
		}
		else if(imc > 24.9 && imc < 29.9){
			
			$('#message').text("imc > 24.9 && imc < 29.9: Surpoids")
		}else{

			$('#message').text("imc > 30: Obésité")
		}*/

		switch (true) {
			case imc < 18.5:
				$('#message').text("imc < 18.5: insuffisance pondérale")
				break;
			case imc > 18.5 && imc < 24.9:
				$('#message').text("imc > 18.5 && imc < 24.9: poids normal")
				break;
			case imc > 24.9 && imc < 29.9:
				$('#message').text("imc > 24.9 && imc < 29.9: Surpoids")
				break;
			default:
				$('#message').text("imc > 30: Obésité")
				break;
		}

	})


})