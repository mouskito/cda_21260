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

    $(".container").load($(this).attr("href") + ".container")

    return false;
})