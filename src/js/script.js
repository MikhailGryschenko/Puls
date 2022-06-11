$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
          adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left_red.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right_red.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});