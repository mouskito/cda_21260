$(document).ready(function () {
	//block message envoyé - cachépar defaut
	$('.block').hide();


	$('.btn_envoie').click(verif);
	// compter champs message
	$('#message').keyup(function() {
	  
	    var nombreCaractere = $("#message").val().length;
	    //var nombreCaractere = $(this).val().length;
	    //$ .trim () Est utilisée pour enlever les deux extrémités de la chaîne d'espaces.
	    var nombreMots = $.trim($("#message").val()).split(' ').length;
	    
	   // var nombreMots = $(this).val().split(' ');
	    //var nombreMots = $(this).val().split(' ').length;
	    console.log(nombreMots);
	    	
	    
	    var msg = ' ' + nombreMots + ' mot(s) | ' + nombreCaractere + ' Caractere(s) / 200';
	    $('#compteur').text(msg);
	    //console.log(nombreCaractere);

		if ($("#message").val() > 0) {
			$("#message").css({"background":"red"})
		}
	    if (nombreCaractere >= 20) { 
	    	$('#compteur').addClass("mauvais"); 
	    	$('#message').addClass("mauvais-message"); 
	    	//$('#message').prop('disabled', true); 
		}else{ 
	    	$('#message').removeClass("mauvais-message"); 
			$('#compteur').removeClass("mauvais"); 
		}
	})


$('#tel').keyup(function (e) {
	// Verification du tel
	var mobile = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/;
		if ( ((!$.isNumeric($('#tel').val())) && $('#tel').val() != "") ||
		(!mobile.test($('#tel').val()))) {
				$('#error').html('<p> KO</p>').css({
					'background':'red',
					'color':'white'
				});
		}else{
			$('#error').html('');
		}
	});
})

function verif(e) {
	e.preventDefault();

	var error = 0;
	
	var tous_les_inputs_type_text = $('input, textarea#message');
	$.each(tous_les_inputs_type_text, function (index) {
		if(tous_les_inputs_type_text[index].value == ''){
			tous_les_inputs_type_text[index].focus();
			tous_les_inputs_type_text[index].style.background = 'red';
			
			error++;
		}else{
			console.log(tous_les_inputs_type_text[index]);
			tous_les_inputs_type_text[index].style.background = 'white';
		}
	})

	// Verification du tel
	var mobile = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/;

	if (!mobile.test($('#tel').val())) {
		$('#tel').focus();
		$('#tel').css({
			'background':'red'
		})
		error++;
	}

	if(error>0){	
		return false;
	}
	else{

		$('#nom_ok').text($('#nom').val())

		$('.block').show(3000);
	}
	$('form').hide();
}