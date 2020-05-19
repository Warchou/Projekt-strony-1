$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll  > ($('.ofirmie').offset().top - ($('.ofirmie').height()*1.8))){
        $('.ofirmie').addClass('wejscieOFirmie');
    }
    
    if((wScroll + $(window).height()) > ($('.partnerzy').offset().top + ($('.partnerzy').height()*0.45))){
        $('.partnerzy').addClass('wejsciePartnerzy');
    }
});
$(document).ready(function(){
    $( "a.menuitem" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: ($($(this).attr("href")).offset().top - 100 ) }, 500);
    });
});
$('.button').click(function(){
    $(this).toggleClass('buttonRotate');
    $('.menuitem').each(function(){
        $(this).toggleClass('menuShow');
    })
});