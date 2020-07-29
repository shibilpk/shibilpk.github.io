function resize() {
    $(function () {
        var header = document.getElementById("header");
        $(window).scroll(function () {
            var aTop = $("#header").innerHeight();
            if ($(this).scrollTop() >= aTop) {
                header.classList.add("black-header");
            } else {
                header.classList.remove("black-header");
            }
        });
     
    });
}
$(document).ready(function () {
    $('.nav-burger-link').on('click', function(){
		$('.nav-burger-link').toggleClass('close');
		$('#header header div.nav').slideToggle();
	});
    $('#header header div.nav nav ul.menu li a.down').click(function (event) {
        event.stopPropagation()
        let $parent = $(this).parents('li');
        $('#header header div.nav nav ul.menu li').not($parent).find('div.sub_menu').slideUp();
        $('#header header div.nav nav ul.menu li').not($parent).find('i.fa').removeClass('fa-chevron-up');
        $('#header header div.nav nav ul.menu li').not($parent).find('i.fa').addClass('fa-chevron-down');

        $parent.find('div.sub_menu').slideToggle();
        $parent.find('i.fa').toggleClass('fa-chevron-up');
        $parent.find('i.fa').toggleClass('fa-chevron-down');

    })
    $('#about_investor section.card section.container.bottom div.right ul li div.top').click(function (event) {
        event.stopPropagation()
        let $parent = $(this).parents('li');
        $('#about_investor section.card section.container.bottom div.right ul li div.top').not(this).parents('li').removeClass('active');
        $('#about_investor section.card section.container.bottom div.right ul li div.top').not(this).siblings('div.bottom').slideUp();
        $('#about_investor section.card section.container.bottom div.right ul li div.top').not(this).children('i.fa').removeClass('fa-long-arrow-down');
        $('#about_investor section.card section.container.bottom div.right ul li div.top').not(this).children('i.fa').addClass('fa-chevron-down');

        $parent.toggleClass('active');
        $parent.find('div.bottom').slideToggle();
        $parent.find('i.fa').toggleClass('fa-long-arrow-down');
        $parent.find('i.fa').toggleClass('fa-chevron-down');

    })
    $('#about_issuer section.card section.container.bottom div.right ul li div.top').click(function (event) {
        event.stopPropagation()
        let $parent = $(this).parents('li');
        $('#about_issuer section.card section.container.bottom div.right ul li div.top').not(this).parents('li').removeClass('active');
        $('#about_issuer section.card section.container.bottom div.right ul li div.top').not(this).siblings('div.bottom').slideUp();
        $('#about_issuer section.card section.container.bottom div.right ul li div.top').not(this).children('i.fa').removeClass('fa-caret-down');
        $('#about_issuer section.card section.container.bottom div.right ul li div.top').not(this).children('i.fa').addClass('fa-caret-right');

        $parent.toggleClass('active');
        $parent.find('div.bottom').slideToggle();
        $parent.find('i.fa').toggleClass('fa-caret-down');
        $parent.find('i.fa').toggleClass('fa-caret-right');
    })
    $('#faq_expert div.bottom ul li div.tops').click(function (event) {
        event.stopPropagation()
        let $parent = $(this).parents('li');
        $('#faq_expert div.bottom ul li div.tops').not(this).parents('li').removeClass('active');
        $('#faq_expert div.bottom ul li div.tops').not(this).siblings('div.bottoms').slideUp();
        $('#faq_expert div.bottom ul li div.tops').not(this).children('i.fa').removeClass('fa-caret-down');
        $('#faq_expert div.bottom ul li div.tops').not(this).children('i.fa').addClass('fa-caret-right');

        $parent.toggleClass('active');
        $parent.find('div.bottoms').slideToggle();
        $parent.find('i.fa').toggleClass('fa-caret-down');
        $parent.find('i.fa').toggleClass('fa-caret-right');

    })
    $('#faq_issuer div.bottom ul li div.tops').click(function (event) {
        event.stopPropagation()
        let $parent = $(this).parents('li');
        $('#faq_issuer div.bottom ul li div.tops').not(this).parents('li').removeClass('active')
        $('#faq_issuer div.bottom ul li div.tops').not(this).siblings('div.bottoms').slideUp();
        $('#faq_issuer div.bottom ul li div.tops').not(this).children('i.fa').removeClass('fa-caret-down')
        $('#faq_issuer div.bottom ul li div.tops').not(this).children('i.fa').addClass('fa-caret-right')

        $parent.toggleClass('active')
        $parent.find('div.bottoms').slideToggle();
        $parent.find('i.fa').toggleClass('fa-caret-down');
        $parent.find('i.fa').toggleClass('fa-caret-right')
    })
    $(`#tab_window div.bottom div.sub_menu div.tab_content[data-tab="1"],#tab_window div.bottom div.tab_head[data-tab="1"]`).addClass('active');
    $('#tab_window div.bottom div.tab_head').click(function (event) {
        let tab_id = $(this).attr('data-tab');
        $('#tab_window div.bottom div.sub_menu div.tab_content,#tab_window div.bottom div.tab_head').removeClass('active');
        $(`#tab_window div.bottom div.sub_menu div.tab_content[data-tab="${tab_id}"],#tab_window div.bottom div.tab_head[data-tab="${tab_id}"]`).addClass('active');
    });
    $("#go_top span").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    resize();
});
$(document).click(function () {
    $('#header header div.nav nav ul.menu li').find('div.sub_menu').slideUp();
    $('#header header div.nav nav ul.menu li').find('i.fa').removeClass('fa-chevron-up')
    $('#header header div.nav nav ul.menu li').find('i.fa').addClass('fa-chevron-down')

    $('#about_investor section.card section.container.bottom div.right ul li').removeClass('active')
    $('#about_investor section.card section.container.bottom div.right ul li div.top').siblings('div.bottom').slideUp();
    $('#about_investor section.card section.container.bottom div.right ul li div.top').children('i.fa').removeClass('fa-long-arrow-down')
    $('#about_investor section.card section.container.bottom div.right ul li div.top').children('i.fa').addClass('fa-chevron-down')

    $('#about_issuer section.card section.container.bottom div.right ul li').removeClass('active')
    $('#about_issuer section.card section.container.bottom div.right ul li div.top').siblings('div.bottom').slideUp();
    $('#about_issuer section.card section.container.bottom div.right ul li div.top').children('i.fa').removeClass('fa-caret-down')
    $('#about_issuer section.card section.container.bottom div.right ul li div.top').children('i.fa').addClass('fa-caret-right')

    $('#faq_expert div.bottom ul li').removeClass('active')
    $('#faq_expert div.bottom ul li div.tops').siblings('div.bottoms').slideUp();
    $('#faq_expert div.bottom ul li div.tops').children('i.fa').removeClass('fa-caret-down')
    $('#faq_expert div.bottom ul li div.tops').children('i.fa').addClass('fa-caret-right')

    $('#faq_issuer div.bottom ul li').removeClass('active')
    $('#faq_issuer div.bottom ul li div.tops').siblings('div.bottoms').slideUp();
    $('#faq_issuer div.bottom ul li div.tops').children('i.fa').removeClass('fa-caret-down')
    
});
$(window).resize(function () {
    resize();
});

$(window).on('load', function () {
    resize();
});
