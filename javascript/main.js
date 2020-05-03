$(document).ready(function(){

    $('a').click(function(e){

        e.preventDefault();

    });

    $('.small-flex-weeklist a').click(function(e){

        let index = $(this).index();

        $('.small-flex-weeklist a > span').removeClass('active').eq(index).addClass('active');

        $('.projects.small-device > div').removeClass('active').eq(index).addClass('active');

    });

    $('.big-flex-weeklist a').click(function(e){

        let index = $(this).index();

        $('.big-flex-weeklist a > span').removeClass('active').eq(index).addClass('active');

        $('.projects.big-device > div').removeClass('active').eq(index).addClass('active');

    });

    $('.spread a').click(function(e){

        $(this).closest('.img-info').toggleClass('spreaded');

    });

    $('a.check').click(function(e){

        $(this).toggleClass('checked');

    });

    $('.checking-area a').click(function(e){

        $(this).toggleClass('checked');

    });

    $('.selector a').click(function(e){

        let index = $(this).index();

        $(this).parent().children().removeClass('active').eq(index).addClass('active');

        $(this).closest('.project').children('.word-info').children().removeClass('active').eq(index).addClass('active');

    });

    $('.nav-button').click(function(e){

        $('.modal-container').fadeIn();

    });

    $('.modal-container').click(function(e){

        $(this).fadeOut();

    });

    $('.modal').click(function(e){

        e.stopPropagation();

    });

    $('a.slide').click(function(e){

        e.stopPropagation();

        $('ul.more-menu').slideToggle();

    });

})