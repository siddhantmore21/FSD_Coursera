$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $("#mycarousel").carousel( { interval: 1000 } );

    $("#carouselButton").click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause'))
        {
            $("#mycarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
            $('#carouselButton').removeClass('btn-danger');
            $('#carouselButton').addClass('btn-success');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play'))
        {
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
            $('#carouselButton').removeClass('btn-success');
            $('#carouselButton').addClass('btn-danger');
        }
       
        
    
    });
    $('#loginatag').click(function(){
        $('#loginmodal').modal('show');
    });

    $('#reservetablebtn').click(function(){
        $('#reservetablemodal').modal('show');
    });


    
    

});