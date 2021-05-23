$(document).ready(function () {

	$("#spotlight header .mobile").click(function () {
		$("#spotlight header .mobile").hide();
		$("#spotlight header .close").show();
		$("#spotlight .menu-container").slideDown("slow", function () {});
	});

	$("#spotlight header .close").click(function () {
		$("#spotlight header .close").hide();
		$("#spotlight header .mobile").show();
		$("#spotlight .menu-container").slideUp("slow", function () {});
	});


var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
    },
		scrollContainer: null, // optional scroll container selector, otherwise use window,
		resetAnimation: true, // reset animation on end (default is true)
  	});
  wow.init();
});

$(window).scroll(function () {
  var scroll_pos = 0;


  scroll_pos = $(this).scrollTop();

  if (scroll_pos > 0) {
    $("#spotlight header").css("background-color", "#fef9f6");
    $("#spotlight header").css("box-shadow", "rgb(68 68 68 / 5%) 2px 3px 3px");
  } else if (scroll_pos == 0) {
    $("#spotlight header").removeAttr("style");
  }

});


