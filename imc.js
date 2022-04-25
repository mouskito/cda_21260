$(".imc").click( function (event) {
    event.preventDefault();    
    var taille = $("#taille").val();
    var poids = $("#poids").val();
    var imc = (poids / ((taille/100)*(taille/100))).toFixed(1);

    $("#result").text(imc)
    switch (true) {
        case imc < 18.5:
            $(".message").text("insuffisance pondérale");
            break;
        case  imc < 24.9:
            $(".message").text("poids normal");
            break
        case imc > 25 && imc < 29.9:
            $(".message").text("surpoids");
            break
        default:
            $(".message").text(" obésité");
            break;
    }
})
