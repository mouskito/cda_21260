$(document).ready ( function() {

    console.log($(".titre").addClass('moussa'));

    $("p").click ( function() 
    {	 // traitement à effectuer 
		//alert ("cliqué") ; 
		//$(this).hide() ; 
		$(this).toggleClass('cda') ; 
	} ); 


    $('button').click(function () {
        //console.log('ok')
        $('img').toggle(5000);
         $('button').html( ($('button').text() == 'Afficher' ? 'Cachée' : 'Afficher') )
    })
 // BOUCLE EACH

 var tab = ['aaa','bbb','ccc','ddd'];
 
    $.each (tab, function (index, valeur) {
    console.log (index+':'+valeur)
    });

    $.each ($ ('.titre'), function ( index, valeur) {
        console.log (index + ':' + valeur);
      });
  

});


console.log("Je log");


