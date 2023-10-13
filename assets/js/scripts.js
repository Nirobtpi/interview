$(document).ready(function() {
    $('.show-menu').click(function(){
        $('.menu-area').addClass('show');
        $('.menu-area').addClass('rgba');
    });

    $('.show-menu').click(function(){
        $('.show-menu').addClass('op');
    });
    $('.show-menu').click(function(){
        $('.hide').show();
    });
    $('.hide').click(function(){
        $('.show-menu').removeClass('op');
    });
    $('.hide').click(function(){
        $('.hide').hide();
        $('.menu-area').removeClass('show');
    });

       $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('fixed');
        } else(
            $('.header').removeClass('fixed')
        )
    });
});