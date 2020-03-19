$(document).ready(function(){


    $("#home-button").click(function(){
        console.log("home button clicked!");
    });

    $("#features-button").click(function(){
        console.log("features button clicked!");
    });

    $("#contact-button").click(function(){
        console.log("contact button clicked");
    });

    $("#learn-button").click(function(){
        $("#heading").css('color','red');
    });
});