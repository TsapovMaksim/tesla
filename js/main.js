$(function () {
    $(".slider-top").slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: 3000
    });

    $(".header__btn").on("click", function () {
        $(".menu").addClass("menu--active");
    });
    $(".menu__close-btn").on("click", function () {
        $(".menu").removeClass("menu--active")
    })
});