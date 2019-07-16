$(function () {
    var heightHead = $('.headers').innerHeight();
    // Show Navbar When click Icon
    $('i.icon').click(function () {
    $('.nav-list').slideToggle();
    });

   // When Scroll body Sticky Nav bar
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
            //add class in nav
        if (scroll > 10) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
            // closed nav
        } if (scroll > 5) {
            $('.nav-list').slideUp();
            // button up
        } if (scroll > 100) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
            //progres bar
        } if (scroll > $('.' + 'exprets').offset().top - heightHead) {
            $('.exprets .prog-contant .prog .prog-right .prog-bar ,.exprets .prog-contant .prog .prog-left .prog-bar').css(
                {'display': 'block'});
        } else {
            $('.exprets .prog-contant .prog .prog-right .prog-bar ,.exprets .prog-contant .prog .prog-left .prog-bar').css(
                {'display':'none'});
            // conet
        } if ( scroll >= $('.' + 'statistics').offset().top - ( heightHead)){
            $('.statistics-info span').fadeIn(function(){
                $('.timer').countTo();
            });
        }
    });

    // scrollTop
    $('.scrollTop').click(function(){
        $('html, body').animate({
            scrollTop:0
        },500);
    });

    //Active class nav
    $('.nav-list .list a').click(function(){
    $(this).parent().siblings().children().removeClass('active');
    $(this).addClass('active');
    $('.nav-list').slideUp();
    });

    //---------------goto elimint
    $('.nav-list .list a').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top - heightHead
    }, 1500)
    });

    // add active to scroll
    $(window).scroll(function(){
        $('.block').each(function(){
            if ($(window).scrollTop() > $(this).offset().top){
                var blockID = $(this).attr('id');
                $('.nav-list .list a').removeClass('active');
                $('.nav-list .list a[data-scroll="' + blockID + '"]').addClass('active')
            }
        });
    });

    //Button change bg portfolio
    $('.portfolio .buttons button').click(function(){
        $(this).siblings().removeClass('active-btn');
        $(this).addClass('active-btn');

        var Filter = $(this).attr('id');
        if (Filter === "all"){
            $('.images > div ').fadeIn();
        }else{
            $('.images > div ').hide();
            $('.images').contents().filter('.' + Filter ).fadeIn();
        }
        });

        // owl carousel >> Team Section
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });


        //Panel Choose
        $('.choose .c-panel ul li').click(function(){
            $(this).siblings().removeClass('active-btn');
            $(this).addClass('active-btn');
            var panel =  $(this).data('val');
            $('.contact > div').hide();
            $('.contact').contents().filter('#' + panel).fadeIn();
        });

        // popup Video
        $('.pop').magnificPopup({
            type:'iframe'
        });

        // slick dots
        $('.slick').slick({
            nextArrow: false,
            prevArrow: false,
            pauseOnHover: false,
            autoplay: true
        });


});