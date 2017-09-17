$(window).resize(function() {
    moveProgressBar();
});

$(window).ready(function() {
    moveProgressBar();
});




function moveProgressBar() {

    $('.progress-wrap').each(function() {
        var element = $(this);
        var getPercent = (element.data('progress-percent') / 100);
        var getProgressWrapWidth = $(element).width();
        var progressTotal = (1 - getPercent) * getProgressWrapWidth;
        var animationLength = 1500;

        element.find('.pourcent').html(getPercent);

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        element.find('.progress-bar').stop().animate({
            width: progressTotal
        }, {
            duration: animationLength,
            step: function() { // called on every step
                var tempWidth = element.find('.progress-bar').width();

                var pourcentPos = tempWidth;
                if (tempWidth >= $(element).width() - 24) {
                    pourcentPos = $(element).width() - 24;
                }

                element.find('.pourcent').css({ right: pourcentPos });

                // Update the element's text with rounded-up value:
                element.find('.pourcent').text(100 - Math.round(tempWidth * 100 / $(element).width()) + " %");
            }
        });
    });

}