/**
 * 
 * $.ajax({
    url:"etudiant.json",
    success:function (data) {
        console.log(data);
        console.log(data.etudiants);
        var style ="<ul>";
        $.each(data.etudiants, function ( index,valeur) {
            style += "<li>" + valeur.prenom+ " " +valeur.nom+ "</li>";
        })

        style += "</ul>";

        $(".liste").html(style);
    },
    error:function (xhr) {
        console.log(xhr);
        if (xhr.status == 404) {
        $(".liste").html("<img src='https://cdn.dribbble.com/users/1291613/screenshots/3337571/homer_404_800x600.png'>")
        }
    }
})

//AFFICHE LES ADMIS

$('.show').hide();

$(".admis").click(function () {
    $.ajax({
        url:"etudiant.json",
        success:function (params) {
            var style ="<ul>";
            $.each(params.etudiants, function ( index,valeur) {
               if (valeur.moyenne > 9) {
                   style += "<li>"+ valeur.nom+" </li>";
                }
            })
            style += "</ul>";
            $(".show").removeClass("alert-danger");
            $(".show").addClass("alert-success");
            $(".show").html(style)
            
            $('.show').show(2000)
        },
        error:function (xhr) {
            console.log(xhr.status);
        }
    })
})
// SHOW ECHEC
$(".echec").click(function () {
    $.ajax({
        url:"etudiant.json",
        success:function (params) {
            var style ="<ul>";
            $.each(params.etudiants, function ( index,valeur) {
                if (valeur.moyenne < 10) {
                    style += "<li>"+ valeur.nom+" </li>";
                }
            })
            style += "</ul>";
            $(".show").removeClass("alert-success");
            $(".show").addClass("alert-danger");
            $(".show").html(style)
            
            $('.show').show(2000)
        },
        error:function (xhr) {
            console.log(xhr.status);
        }
    })
})
 * 
 * 
 */

// VERSION 2 avec tableau de notes
$.ajax({
    url:"etudiant.json",
    success:function (data) {
        $.each(data.etudiants, function ( index,valeur) {
            var notes = 0;
            var compteur = 0;

            $.each(valeur.notes, function (key, value) {
               notes += value;
               compteur ++;
            })
            moyenne = notes/compteur;
           // moyenne = notes/valeur.notes.length;
            console.log(notes, compteur+" avec une moyenne de " + moyenne.toFixed(2));
        })
    },
    error:function (xhr) {
        if (xhr.status == 404) {
        $(".liste").html("<img src='https://cdn.dribbble.com/users/1291613/screenshots/3337571/homer_404_800x600.png'>")
        }
    }
})



