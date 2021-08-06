$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows-right"></img>',
        asNavFor: '.slider-dotshead',
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [
            {
              breakpoint: 961,
              settings: "unslick",
            },
        ]
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows-right"></img>',
        asNavFor: '.slider-map',
        responsive: [
            {
              breakpoint: 1210,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                }
            },
            {
                breakpoint: 426,
                settings: {
                  slidesToShow: 1,
                  centerMode: false,
                }
            }
        ]
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1102,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  centerMode: true,
                }
            },
            {
                breakpoint: 720,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                }
            }
        ]
    });

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="arrows-left"></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="arrows-right"></img>',
    });

    //input and plus minus buttons in sleep block
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="/img/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="/img/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.on("click", function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.on("click", function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    //counting accommodation in sleep block
    $('.quantity-button').on('click', function() {
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html('$' + summ);
    });

    $('.surfboard-box__circle').on('click', function() {
      $(this).toggleClass('active');
    });


    $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('active');
    });

    //init wow.js
    new WOW().init();

    //Smooth scroll and pageup
    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").on('click', function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });

    //date on main page
    function getDateYear() {
        const d = new Date(),
              day = d.getDate(),
              month = d.getMonth(),
              year = d.getFullYear();
            
            return {
                'days': day,
                'months': month,
                'years': year
            };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock() {
        const days = document.querySelector(".header__date-day"),
              monthYear = document.querySelector('.header__month-year');

        updateClock();

        function updateClock() {
            const t = getDateYear();

            days.innerHTML = getZero(t.days);
            monthYear.innerHTML = `${getZero(t.months + 1)} | ${getZero(t.years)}`;
        }
    }

    setClock();
    
});


const now = new Date();

console.log(now.getMonth());