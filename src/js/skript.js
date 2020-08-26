$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1
        , slidesToScroll: 1
        , arrows: true
        , fade: true
        , asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 10
        , slidesToScroll: 1
        , asNavFor: '.slider'
        , dots: false
        , centerMode: true
        , focusOnSelect: true

    });
});

$(document).ready(function(){
    $('.blog--slider').slick();
});

