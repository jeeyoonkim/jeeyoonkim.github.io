$('#toggle-control').click(function(){
    if($('#target').hasClass("open")){
        $('#target').css("display","none");
        $('#target').removeClass("open");
    } else{
        $('#target').css("dispaly", "block");
        $('#target').addClass("open");
    }
});