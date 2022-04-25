$(".nav-item a").click(function () {

    console.log($(this).attr("href"));
   /* VERSION 1 
   $.ajax({
        url: $(this).attr("href"),
        success:function (data) {
            $(".container").empty();
            $(".container").append(data);
        } 
    });*/

    //VERSION 2  avec load

    $(".container").load($(this).attr("href") + " .container")

    $.ajax({
          url:"afpa.json",
          dataType:"json",
          success:function(data){
           console.log(data);

        var style = "<ul>";
           for (var i = 0; i < data.stagiaire.length; i++) {
            var nom_stagiaire = data.stagiaire[i].nom;
            var prenom_stagiaire = data.stagiaire[i].prenom;
            
            style = style+  "<li>";
           // style += "<li>";
            style +=  nom_stagiaire+" ";
            style += prenom_stagiaire +" ";
            style += data.stagiaire[i].email;
            style += "</li> ";
           }
           style += "</ul>";
        $(".ul").html(style)
          },
          error:function(xhr) {
           console.log(xhr.status)
          }
         })
        
        

    return false;
})