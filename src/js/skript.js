$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1
        , slidesToScroll: 0
        , arrows: false
        , fade: true
        , asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 10
        , slidesToScroll: 0
        , asNavFor: '.slider-for'
        , dots: true
        , centerMode: true
        , focusOnSelect: true
    });
});
