import Swiper from "swiper";
import "swiper/css";
import $ from "jquery";

const feedbacksSlider = new Swiper(".feedbacks__slider", {
    slidesPerView: 1,
    spaceBetween: 25,

    navigation: {
        nextEl: ".feedbacks__slider-btn_next",
        prevEl: ".feedbacks__slider-btn_prev",
    },

    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
    },
});

$(".feedbacks__slider-btn_prev").click(() => {
    feedbacksSlider.slidePrev();
});

$(".feedbacks__slider-btn_next").click(() => {
    feedbacksSlider.slideNext();
});
