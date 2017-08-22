/* Every time the window is scrolled ... */
$('#frPage').scroll(function() {

    var newPos = $('#frPage').scrollTop() - 62;

    if (newPos >= 0) {
        $('#sticky-toolbar').css({ "top": "0px" });
    } else {

        $('#sticky-toolbar').css({ "top": newPos + "px" });
    }

    manageHiddenElem(1000);

});


manageHiddenElem(0);


function manageHiddenElem(duration) {
    console.log("manageHiddenElem");
    $('.hideme').each(function(i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
        var bottom_of_window = $('#frPage').scrollTop() + $('#frPage').height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {

            $(this).animate({
                'opacity': '1'
            }, duration);

        }

    });
}