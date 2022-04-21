//var montantHT = document.getElementById("montantHT").value;
var montant = document.querySelectorAll('input[type="tel"]');

montant.forEach(element => {
    console.log(element.id);
    element.addEventListener("keyup",function () {
       calculTva(''+element.id+'');
    })
});

//appliqueTauxTVA

var appliqueTauxTVA = document.querySelectorAll('.appliqueTauxTVA .appliqueTaux');

appliqueTauxTVA.forEach(element => {
        var tva =   element.value.replace(/[^\d.]/g, '');
    
    element.addEventListener('click', function () {
        miseAJourTaux(tva)
    } )
    
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function formatMillier(nombre) // cette fonction (facultative) permet de prévoir une regex qui crée un espace sur chaque millier. "1 000" et non pas "1000".
{
  nombre += '';
  var sep = ' ';
  var reg = /(\d+)(\d{3})/;
  while( reg.test( nombre)) {
	  //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    nombre = nombre.replace( reg, '$1' +sep +'$2');
  }
  return nombre;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// TVA
function calculTva(depart)
{	//alert(depart)
	if(depart == 'tauxTVA') depart = 'montantHT'; // si le départ viens du taux de TVA, nous définissons le départ sur montantHT (c'est un montant réél permettant d'avoir une base de calcul).
	
	// Ce passage peut être factorisé avec 1 boucle.
	var montantHT = document.getElementById("montantHT").value; // on récupère direct la value de l'élément qu'on selectionne (ça évite de faire .value sur les prochaines lignes).
	montantHT = montantHT.replace(",","."); // remplace les virgules par des points.
	montantHT = montantHT.replace(/[^\d.]/g, ''); // regex pour retirer les caractères qui ne sont pas des chiffres. exemple '€, %, etc.'
	montantHT = parseInt(montantHT); // cast en int. évite d'avoir des espaces ou autre.
	
	var montantTVA = document.getElementById("montantTVA").value; // on récupère direct la value de l'élément qu'on selectionne (ça évite de faire .value sur les prochaines lignes).
	montantTVA = montantTVA.replace(",","."); // remplace les virgules par des points.
	montantTVA = montantTVA.replace(/[^\d.]/g, ''); // regex pour retirer les caractères qui ne sont pas des chiffres. exemple '€, %, etc.'
	montantTVA = parseInt(montantTVA); // cast en int. évite d'avoir des espaces ou autre.

	var montantTTC = document.getElementById("montantTTC").value; // on récupère direct la value de l'élément qu'on selectionne (ça évite de faire .value sur les prochaines lignes).
	montantTTC = montantTTC.replace(",","."); // remplace les virgules par des points.
	montantTTC = montantTTC.replace(/[^\d.]/g, ''); // regex pour retirer les caractères qui ne sont pas des chiffres. exemple '€, %, etc.'
	montantTTC = parseInt(montantTTC); // cast en int. évite d'avoir des espaces ou autre.
	
	var tauxTVA = document.getElementById("tauxTVA").value; // on récupère direct la value de l'élément qu'on selectionne (ça évite de faire .value sur les prochaines lignes).
	tauxTVA = tauxTVA.replace(",","."); // remplace les virgules par des points.
	tauxTVA = tauxTVA.replace(/[^\d.]/g, ''); // regex pour retirer les caractères qui ne sont pas des chiffres. exemple '€, %, etc.'
	tauxTVA = parseFloat(tauxTVA); // parseInt cast en int. évite d'avoir des espaces ou autre.
		
	// console.info('montantHT : ' + montantHT + ' - montantTVA : '+ montantTVA + ' - montantTTC : ' + montantTTC + ' - tauxTVA : ' +tauxTVA);
	
	if(isNaN(montantHT) || montantHT == "") // si il y a un problème avec le montant malgré les regex ci-dessus, nous le définissons à 0.
	{
		var montantHT = 0;
	}
	if(isNaN(tauxTVA) || tauxTVA == "") // si il y a un problème avec le tauxTVA malgré les regex ci-dessus, nous adressons un message d'erreur.
	{
			document.getElementById("totalTva").innerHTML = "<div class=\"erreur\">Vous devez saisir une TVA valide ! <strong></div><br />";
	}
	// ---------------------- CALCUL TVA --------------------------		
	if(depart == 'montantHT')
	{
		montantTVA = Math.round(montantHT * tauxTVA / 100);	// Math.round permet d'arrondir => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/round
		montantTTC = Math.round(Number(montantHT)+Number(montantTVA)); // Number permet de certifier l'addition et non pas la concaténation puisque le symbole est le même pour ces 2 opérations.
		
		if(!isNaN(montantHT)) document.getElementById("montantTVA").value = formatMillier(montantTVA)+ ' €'; // Si le chiffre est correct, nous le mettons dans son input.
		if(!isNaN(montantTTC)) document.getElementById("montantTTC").value = formatMillier(montantTTC)+ ' €'; // Si le chiffre est correct, nous le mettons dans son input.
	}
	else if(depart == 'montantTVA')
	{
		montantHT = Math.round(montantTVA / (tauxTVA/100));// Math.round permet d'arrondir => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/round
		montantTTC =  Math.round(Number(montantHT)+Number(montantTVA));; // Number permet de certifier l'addition et non pas la concaténation puisque le symbole est le même pour ces 2 opérations.
		
		if(!isNaN(montantHT)) document.getElementById("montantHT").value = formatMillier(montantHT)+ ' €'; // Si le chiffre est correct, nous le mettons dans son input.
		if(!isNaN(montantTTC)) document.getElementById("montantTTC").value = formatMillier(montantTTC)+ ' €'; // Si le chiffre est correct, nous le mettons dans son input.
	}
	else if(depart == 'montantTTC')
	{
		montantHT = Math.round(montantTTC *(100/(100+tauxTVA)));// Math.round permet d'arrondir => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/round
		montantTVA =  Math.round(montantTTC - montantHT);// Math.round permet d'arrondir => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/round
		
		if(!isNaN(montantHT)) document.getElementById("montantHT").value = formatMillier(montantHT)+ ' €'; // Si le chiffre est correct, nous le mettons dans son input.
		if(!isNaN(montantTVA)) document.getElementById("montantTVA").value = formatMillier(montantTVA)+ ' €'; // Si le chiffre est correct, nous le mettons dans son input.
	}
	// ---------------------- CALCUL TVA --------------------------		
	// console.log('montantHT : ' + montantHT + 'montantTVA : '+ montantTVA + 'montantTTC : ' + montantTTC + 'tauxTVA : ' +tauxTVA);
		
	if(montantHT != 0) // si le montant HT est différent de 0, nous adressons un message.
	{
			document.getElementById("totalTva").innerHTML = "<p style=\"font-size: 15px;\">Montant Hors Taxes : <strong>"+montantHT+" €</strong><br />Montant TVA : <strong>"+montantTVA+" €</strong> avec un taux de TVA égal à <strong>"+tauxTVA+" %</strong><br />Montant TTC : <strong>"+montantTTC+" €</strong></p>";
	}
}
function miseAJourTaux(taux) // cette fonction permet de mettre à jour le taux et d'ajouter le symbole '%'.
{
	document.getElementById('tauxTVA').value = taux+" %";
	
	calculTva('tauxTVA');
}
