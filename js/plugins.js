/*global $, jQuery, alert*/

$(document).ready(function () {


    const video = document.getElementById('myVideo');
    const muteButton = document.getElementById('muteButton');

    muteButton.addEventListener('click', function () {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? '🔇 Unmute' : '🔊 Mute';
    });



    "use strict";

    // Nice Scroll

    // Check if the device is NOT mobile
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
        $("html").niceScroll();
    }

    // Show Color Option Div When Click On The Gear

    $(".gear-check").click(function () {

        $(".color-option").fadeToggle();

    });

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li"),

        scrollButton = $("#scroll-top");

    colorLi.eq(0).css("backgroundColor", "#E60024").end()

        .eq(1).css("backgroundColor", "#004e0c").end()

        .eq(2).css("backgroundColor", "#009AFF").end()

        .eq(3).css("backgroundColor", "#FFD500");

    colorLi.click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });

    // Caching The Scroll Top Element

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 700) {

            scrollButton.show();

        } else {

            scrollButton.hide();
        }
    });

    // Click On Button To Scroll Top
    scrollButton.click(function () {

        $("html,body").animate({ scrollTop: 0 }, 600);

    });

    // check carousel
    $(window).on('load', function () {
        $('.carousel').carousel({
            interval: 6000
        });
    });

    //Loading Spinner
    $(".loading-overlay .spinner").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });


});
