function resize() {
    // let h = $('#spotlight .wrapper section.container div.menu').outerHeight(true);
    // $('#spotlight .wrapper section.container div.image').height(h);
    function autoMargin() {
        let card_ids = [
            "#skill section.wrapper section.container div.card",
            "#github section.wrapper section.container ul li",
            "#projects ul li",
        ];
        let initial_width = "30px";
        let marge_width = 0;
        card_ids.forEach(function (card) {
            let width =
                (100 * parseFloat($(card).css("width"))) /
                parseFloat($(card).parent().css("width"));
            if (width) {
                width = parseFloat(width).toFixed(2);
                //    console.log(width, "wid");
                let item = parseInt(100 / width);
                //    console.log(item, "item");
                if (item != 1) {
                    marge_width = ((100 - width * item) / (item - 1)).toFixed(
                        2
                    );
                    $(card).parent().css({
                        "justify-content": "initial",
                    });
                } else if ((item = 1)) {
                    marge_width = 100 - width * item.toFixed(2);
                    $(card).parent().css({
                        "justify-content": "center",
                    });
                }
                if (marge_width == 0) {
                    marge_width = initial_width;
                    $(card).css({
                        "margin-left": 0,
                        "margin-top": 0,
                    });
                } else {
                    marge_width += "%";
                    $(card).css({
                        "margin-left": marge_width,
                        "margin-top": 0,
                    });
                }
                //    console.log(marge_width);
                let no_margin_left_child = item + "n" + "-" + (item - 1);
                //    console.log(no_margin_left_child);
                $(`${card}:nth-child(${no_margin_left_child})`).css({
                    "margin-left": 0,
                });
                let no_margin_top_child = "n" + "+" + (item + 1);
                //    console.log(no_margin_top_child);
                $(`${card}:nth-child(${no_margin_top_child})`).css({
                    "margin-top": marge_width,
                });
            }
        });
    }
    autoMargin();
    addClassOnScroll();
}

$(document).ready(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1700
                );
                return false;
            }
        }
    });
    $("a.nav-burger-link").click(function () {
        $(this).siblings().slideToggle();
    });

    $("#clients .owl-carousel").owlCarousel({
        loop: true,
        items: 9,
        margin: 10,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 5,
            },
            1000: {
                items: 9,
            },
        },
    });
    var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
            setTimeout(function () {
                //
            }, 1500);
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });

    $(".page-transition").toggleClass("slide");
    setTimeout(function () {
        wow.init();
    }, 1500);

    $(
        '#about section.wrapper section.container div.left div.button form input[type="email"]'
    ).keyup(function () {
        if ($(this).val()) {
            $(this).addClass("value");
        } else {
            $(this).removeClass("value");
        }
    });
    $(".container-stick").click(function () {
        $(".stick").toggleClass(function () {
            return $(this).is(".open, .close") ? "open close" : "open";
        });
    });
});

// check element at view point===========
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function addClassOnScroll() {
    var windowTop = $(window).scrollTop();
    $("section[id]").each(function (index, elem) {
        var windowHeight = $(window).outerHeight(true);
        var offsetTop = $(elem).offset().top;
        var outerHeight = $(this).outerHeight(true);

        if (
            windowTop > offsetTop - windowHeight / 2 &&
            windowTop < offsetTop + outerHeight
        ) {
            var elemId = $(elem).attr("id");
            $("nav ul li a.active").removeClass("active");
            $("nav ul li a[href='#" + elemId + "']").addClass("active");
        }
    });
}

$(window).scroll(function () {
    200 < $(window).scrollTop()
        ? $(".backtotop").addClass("active")
        : $(".backtotop").removeClass("active");
    addClassOnScroll();
});
//======================

$(window).resize(function () {
    resize();
});

$(window).on("load", function () {
    resize();
});

/* Go to top button  */

$(document).on("click", "a.backtotop", function (a) {
    $("html, body").animate({ scrollTop: 0 }, 800), a.preventDefault();
});

/* Go to top button end */

(function ($) {
    $.fn.directionalHover = function (options) {
        // Extend default plugin options
        var opts = $.extend({}, $.fn.directionalHover.defaults, options);

        // Create bit flags
        var FLAG_T = 1, // top
            FLAG_R = 2, // right
            FLAG_B = 4, // bottom
            FLAG_L = 8; // left

        // Create bit masks
        var tlMask = FLAG_T | FLAG_L,
            trMask = FLAG_T | FLAG_R,
            blMask = FLAG_B | FLAG_L,
            brMask = FLAG_B | FLAG_R;

        function slideOverlay(overlay, direction, px, py, ew, eh, ex, ey) {
            var cornerFlags = 0; // top|right|bottom|left

            if (py - ey <= eh / 2) cornerFlags ^= FLAG_T;
            if (px - ex >= ew / 2) cornerFlags ^= FLAG_R;
            if (py - ey > eh / 2) cornerFlags ^= FLAG_B;
            if (px - ex < ew / 2) cornerFlags ^= FLAG_L;

            findSide(
                cornerFlags,
                overlay,
                direction,
                px - ex,
                py - ey,
                ew / 2,
                eh / 2
            );
        }

        function findSide(flags, overlay, direction, x, y, w, h) {
            if (testMask(flags, tlMask)) {
                testTopLeftToBottomRight(x, y, w, h)
                    ? setOverlayPosition(overlay, direction, 0, -w * 2)
                    : setOverlayPosition(overlay, direction, -h * 2, 0);
            } else if (testMask(flags, trMask)) {
                testBottomRightToTopLeft(x, y, w, h)
                    ? setOverlayPosition(overlay, direction, -h * 2, 0)
                    : setOverlayPosition(overlay, direction, 0, w * 2);
            } else if (testMask(flags, blMask)) {
                testBottomRightToTopLeft(x, y, w, h)
                    ? setOverlayPosition(overlay, direction, 0, -w * 2)
                    : setOverlayPosition(overlay, direction, h * 2, 0);
            } else if (testMask(flags, brMask)) {
                testTopLeftToBottomRight(x, y, w, h)
                    ? setOverlayPosition(overlay, direction, h * 2, 0)
                    : setOverlayPosition(overlay, direction, 0, w * 2);
            }
        }

        function testMask(flags, mask) {
            return (flags & mask) === mask;
        }

        function testTopLeftToBottomRight(x, y, w, h) {
            return h * x - w * y < 0;
        }

        function testBottomRightToTopLeft(x, y, w, h) {
            return w * (y - h) + h * x - w * h < 0;
        }

        function setOverlayPosition(overlay, direction, top, left) {
            if (direction === "in") {
                overlay.animate(
                    {
                        top: top,
                        left: left,
                    },
                    0,
                    function () {
                        overlay.stop().animate(
                            {
                                top: 0,
                                left: 0,
                            },
                            opts.speed,
                            opts.easing
                        );
                    }
                );
            } else if (direction === "out") {
                overlay.animate(
                    {
                        top: 0,
                        left: 0,
                    },
                    0,
                    function () {
                        overlay.stop().animate(
                            {
                                top: top,
                                left: left,
                            },
                            opts.speed,
                            opts.easing
                        );
                    }
                );
            }
        }

        this.css({
            position: "relative",
            overflow: "hidden",
        });

        this.find("." + opts.overlay).css({
            position: "absolute",
            top: "-100%",
        });

        return this.each(function () {
            var container = $(this);

            container.hover(
                function (e) {
                    slideOverlay(
                        container.find("." + opts.overlay),
                        "in",
                        e.pageX,
                        e.pageY,
                        container.width(),
                        container.height(),
                        Math.floor(container.offset().left),
                        container.offset().top
                    );
                },
                function (e) {
                    slideOverlay(
                        container.find("." + opts.overlay),
                        "out",
                        e.pageX,
                        e.pageY,
                        container.width(),
                        container.height(),
                        Math.floor(container.offset().left),
                        container.offset().top
                    );
                }
            );
        });
    };

    // Plugin default options
    $.fn.directionalHover.defaults = {
        overlay: "dh-overlay",
        easing: "swing",
        speed: 400,
    };
})(jQuery);
