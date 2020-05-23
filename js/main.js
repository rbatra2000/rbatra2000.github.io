document.body.className = 'fade';


// Improve the transition between x and hamburger menu
$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
        var x = document.getElementsByClassName("navtoggle");
        for (var i = 0; i < x.length; i++) {
            if (x[i].style.display === "none") {
                x[i].style.display = "block";
            } else {
                x[i].style.display = "none";
            }
        }
    })
});

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
        $('.sm').addClass('black');
    } else {
        $('nav').removeClass('black');
        $('.sm').removeClass('black');
    }
});

$('a[href^="#"]').on('click', function (event) {

    var target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);

        if ($('nav ul').hasClass('showing')) {
            var x = document.getElementsByClassName("navtoggle");
            for (var i = 0; i < x.length; i++) {
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        }

        $('nav ul').removeClass('showing');
        var x = document.getElementsByClassName("navtoggle");
        
    }

});

var animateHTML = function () {
    var elems;
    var windowHeight;
    function init() {
        elems = document.getElementsByClassName('hidden');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }
    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                    'hidden',
                    'fade-in-element'
                );
            }
        }
    }
    return {
        init: init
    };
};

animateHTML().init();