$(document).ready(function(){
    $("#reservetablebtn").click(function(){
        $('html,body').animate({
        scrollTop: $("#reservetableform").offset().top},
        'slow');

    });
});