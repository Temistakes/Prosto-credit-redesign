import $ from "jquery";

$(".pop-up-btn.pop-up-btn_click").click((event) => {
    $(event.currentTarget).next().slideToggle(300);
});

$(".header__mobile-menu").click(() => {
    $(".mobile-menu").slideToggle(300);
    $(".mobile-menu__socials").show();
});

$(".mobile-menu__skip-btn").click(() => {
    $(".mobile-menu").slideToggle(300);
    $(".mobile-menu__socials").hide(300);
});
