

$(".moussa").click(function () {
    var saisi = $(".container input[type='text']").val();
    var inverse = saisi.split("").reverse().join("");
    
    if (saisi === inverse) {
        $(".message").html("<div class='alert alert-success' role='alert'>"+ saisi+ " est un palindrome</div>")
    }else{
        $(".message").html("<div class='alert alert-danger' role='alert'>"+ saisi+ " n'est pas un palindrome</div>")
    }
})