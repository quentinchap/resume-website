$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

        if ($(window).scrollTop() < 60)
            $('#toolbar').css({ "top": $(window).scrollTop() - 60 + "px" });
        else if ($(window).scrollTop() >= 60)
            $('#toolbar').css({ "top": "0px" });



        $('.hideme').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1'
                }, 1000);

            }

        });

    });

});