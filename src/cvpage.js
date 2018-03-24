import './style/style.css';
import './style/fr.css';
import './style/sideNav.css';
import './style/projects.scss';
import '../node_modules/animate.css/animate.min.css';
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

import '../node_modules/venobox/venobox/venobox.css';
require('venobox');

require('slick-carousel');
require('./scripts/sideNavMenu');
require('./components/articles/articles');
require('./components/competencies/competencies');
require('./lib/anime.min');
require('./lib/jquery.lazy.min');
require('./lib/parlx.min');
require('./scripts/progressbar');
require('./scripts/scrollAnimation');

require('./fr.html');
require('./en.html');

$(document).ready(function() {
    $('.venobox').venobox();
});




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