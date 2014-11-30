$(document).ready(function() {

    var stickyNavTop = $('#navbar').offset().top;

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
         
        if (scrollTop > stickyNavTop) { 
            $('#navbar').addClass('sticky');
            $("#container").css("margin-top", "111px");
        } else {
            $('#navbar').removeClass('sticky'); 
            $("#container").css("margin-top", "0px");
        }
    };

    // stickyNav();


    $(window).scroll(function() {
        stickyNav();
        var scrollTop = $(window).scrollTop();

        // Raise footer when near bottom of the page.
        if (scrollTop + $(window).height() > $(document).height() - 250) {
            $("#before-footer").animate({top: "0px"}, 600, function() {
                $(this).css("z-index", "1"); // raise z-index to make images clickable
            });
        };

        // Fade out fist when you scroll downwards.
        var headerTop = $("#header").offset().top;
        if (scrollTop > headerTop) {
            var pixelsPastHeader = scrollTop - headerTop;
            $("#header").css({'opacity': 1 - (pixelsPastHeader/500)});
        };

        // var axel = $(".image-header").offset().top;
        // if (scrollTop > axel) {
        //     var pixelsPastHeader = scrollTop - axel;
        //     $(".image-header").css({'opacity': 1 - (pixelsPastHeader/100)});
        // };

    });

    $(".faq-question").click(function() {
        var answer = $(this).children("div");
        if (answer.hasClass("collapsed")) {
            $(this).children(".expand-symbol").text("–");
            answer.show(400);
            answer.removeClass("collapsed");
        } else {
            answer.addClass("collapsed");
            answer.hide(200);
            $(this).children(".expand-symbol").text("+");
        }
    })

});
