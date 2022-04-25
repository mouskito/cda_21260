$(".block").hide();

$(".envoi").click(function (e) {
    e.preventDefault();
    console.log("Je suis cliqué");

    $("#nom").text( $("#prenom").val() );
    console.log($("#nom").text());
   $(".block").show();
})

$("#msg").keyup(function () {
    //var nbreMots = $.trim($("#msg").val())
    var nbreMots = $.trim($(this).val().split(' ').length);
    
    var nbreCaracteres = $("#msg").val().length
    console.log(nbreCaracteres);

    if (nbreCaracteres < 5) {
        $('#compteur').text('nombre de mots ' +nbreMots+' et' + nbreCaracteres)
       // $(".envoi").prop('disabled',true)
    }
})