var pressed =2;

$(".daily").click(function(){

    if(pressed!=1){

        $(".weekly").css("color","hsl(235, 42%, 69%)");
        $(".monthly").css("color","hsl(235, 42%, 69%)");
        $(".daily").css("color","white");

        pressed=1;
    }

    $(".hours1").text("5hrs");
    $(".last1").text("Last Week - 7hrs");

    $(".hours2").text("1hrs");
    $(".last2").text("Last Week - 2hrs");

    $(".hours3").text("0hrs");
    $(".last3").text("Last Week - 1hrs");

    $(".hours4").text("1hrs");
    $(".last4").text("Last Week - 1hrs");

    $(".hours5").text("1hrs");
    $(".last5").text("Last Week - 3hrs");

    $(".hours6").text("0hrs");
    $(".last6").text("Last Week - 1hrs");

});


$(".weekly").click(function(){
    
    if(pressed!=2){

        $(".daily").css("color","hsl(235, 42%, 69%)");
        $(".monthly").css("color","hsl(235, 42%, 69%)");
        $(".weekly").css("color","white");

        pressed=2;
    }

    $(".hours1").text("32hrs");
    $(".last1").text("Last Week - 36hrs");

    $(".hours2").text("10hrs");
    $(".last2").text("Last Week - 8hrs");

    $(".hours3").text("4hrs");
    $(".last3").text("Last Week - 7hrs");

    $(".hours4").text("4hrs");
    $(".last4").text("Last Week - 5hrs");

    $(".hours5").text("5hrs");
    $(".last5").text("Last Week - 10hrs");

    $(".hours6").text("2hrs");
    $(".last6").text("Last Week - 2hrs");

});


$(".monthly").click(function(){
    
    if(pressed!=3){

        $(".weekly").css("color","hsl(235, 42%, 69%)");
        $(".daily").css("color","hsl(235, 42%, 69%)");
        $(".monthly").css("color","white");

        pressed=3;
    }


    $(".hours1").text("103hrs");
    $(".last1").text("Last Week - 128hrs");

    $(".hours2").text("23hrs");
    $(".last2").text("Last Week - 29hrs");

    $(".hours3").text("13hrs");
    $(".last3").text("Last Week - 19hrs");

    $(".hours4").text("11hrs");
    $(".last4").text("Last Week - 18hrs");

    $(".hours5").text("21hrs");
    $(".last5").text("Last Week - 23hrs");

    $(".hours6").text("7hrs");
    $(".last6").text("Last Week - 11hrs");

});