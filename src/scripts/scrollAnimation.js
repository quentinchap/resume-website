let blocked = false;


$(window).scroll(function() {


    var newPos = $(window).scrollTop() - 62;
    $('#hi').parlx({
        speed: 0.4,
        positionX: "right"
    });
    $('#work-bg').parlx({
        speed: 0.4,
        positionX: "center",
        positionY: "bottom"
    });
    $('#contact-bg').parlx({
        speed: 0.4,
        positionX: "center",
        positionY: "bottom"
    });

    if (newPos >= 0) {
        $('#sticky-toolbar').css({ "top": "0px" });
    } else {

        $('#sticky-toolbar').css({ "top": newPos + "px" });
    }

    manageHiddenElem(1000);

});

manageHiddenElem(0);

function manageHiddenElem(duration) {
    /* $('.hideme').each(function(i) {

         var bottom_of_object = $(this).offset().top;
         var bottom_of_window = $('#frPage').scrollTop();

         console.log($(this), bottom_of_window > bottom_of_object);

         /* If the object is completely visible in the window, fade it it 
         if (bottom_of_window > bottom_of_object) {

             $(this).animate({
                 'opacity': '1'
             }, duration);

         }

     });
    $('#aboutme').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });

    $('#articles').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 500
    });*/

}

$(".more-info-button-fr").click(function() {
    event.preventDefault();


    let button = $(this);

    if (!blocked) {
        blocked = true;
        button.prop('disabled', true);
        setTimeout(function() { blocked = false }, 300);

        let content = button.next();
        content.slideToggle(500, function() {
            console.log("slideToggle");
            content.clearQueue();

            button.text(function() {
                //change text based on condition
                return content.is(":visible") ? " Moins d'info " : "En savoir plus";
            });
        });
    }

});