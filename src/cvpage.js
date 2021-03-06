import './style/style.css';
import './style/fr.css';
import './style/sideNav.css';
import './style/sideNav.css';
import '../node_modules/animate.css/animate.min.css';
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');


require('slick-carousel');
require('./scripts/sideNavMenu');
require('./scripts/article');
require('./lib/anime.min');
require('./lib/jquery.lazy.min');
require('./lib/parlx.min');
require('./scripts/progressbar');
require('./scripts/scrollAnimation');

require('./fr.html');
require('./en.html');

function paramSlick() {
    if ($(window).width() < 640) {
        $('#carousel-work').slick({ "slidesToShow": 1, "slidesToScroll": 1 })
    } else if ($(window).width() < 980) {
        $('#carousel-work').slick({ "slidesToShow": 2, "slidesToScroll": 2 })
    } else if ($(window).width() < 1200) {
        $('#carousel-work').slick({ "slidesToShow": 3, "slidesToScroll": 3, "mobileFirst": true })

    } else {
        $('#carousel-work').slick({ "slidesToShow": 4, "slidesToScroll": 4, "mobileFirst": true })
    }
}

paramSlick();


$(window).resize(function() {
    //  paramSlick();
});