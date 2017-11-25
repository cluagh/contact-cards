$(document).ready(function(){
    $("#submit-button").click(function(){
        if($("#first-name").val()!=false){
            $("#first-alert").css("visibility","hidden");
        }
        if($("#last-name").val()!=false){
            $("#last-alert").css("visibility","hidden");
        }
        if($("#textbox").val()!=false){
            $("#desc-alert").css("visibility","hidden");
        }
        if($("#first-name").val()==false){
            $("#first-alert").css("visibility","visible");
        }
        if($("#last-name").val()==false){
            $("#last-alert").css("visibility","visible");
        }
        if($("#textbox").val()==false){
            $("#desc-alert").css("visibility","visible");
        }
        if($("#first-name").val()==false
        ||$("#last-name").val()==false
        ||$("#textbox").val()==false){
        }
        else{
            $("#right").append("<div hidden class='card'><h1>" + $("#first-name").val() + " " + $("#last-name").val() + "</h1><p class='description-button'>Click for description!</p><p hidden class='description-text'>" + $("#textbox").val() + "</p></div>");
            $(".card").fadeIn();   
        }
    })
    $(document).on("click", ".description-button", function(){
        $(this).slideUp();
        $(this).siblings().slideDown();
    })
    $(document).on("click", ".description-text", function(){
        $(this).slideUp();
        $(this).siblings().slideDown();
    })
})