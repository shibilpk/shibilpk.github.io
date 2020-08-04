function resize() {
    // let h = $('#spotlight .wrapper section.container div.menu').outerHeight(true);
    // $('#spotlight .wrapper section.container div.image').height(h);
    function autoMargin() {
        let card_ids = ["#skill section.wrapper section.container div.card","#github section.wrapper section.container ul li"];
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
                    marge_width = ((100 - width * item) / (item - 1)).toFixed(2);
                    $(card).parent().css({
                        "justify-content": "initial",
                    });
                } else if ((item = 1)) {
                    marge_width = (100 - width * item.toFixed(2));
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

    (function () {
		var scroll = new LocomotiveScroll(
			{
				el: document.querySelector('#js-scroll'),
                smooth: true,
                smoothMobile:true,
				getSpeed: true,
				getDirection: true,
                useKeyboard: true,
                multiplier:1,
                lerp	:.1,
                
			}
        );
        scroll.on("call", function (t, e, i) {
            if ("enter" === e){
                i.el.classList.add(t)
                
            }
            else if ("exit" === e){
                i.el.classList.remove(t)
                
            }
            
        })
    
	})();

}

$(document).ready(function () {
    $("#clients .owl-carousel").owlCarousel({
		loop:true,
		items: 9,
	    margin:10,
	    nav:false,
		dots:false,
		smartSpeed: 1000,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:false,
		responsiveClass:true,
		responsive:{
		    0:{
		        items:3,
		    },
		    600:{
		        items:5,
		    },
		    1000:{
		        items:9,
		    }
		}
    });
    resize();
});

$(window).resize(function () {
    resize();
});

$(window).on('load', function () {
    resize();
});
