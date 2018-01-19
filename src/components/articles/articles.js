import "./articles.scss";
import "./articles.phone.scss";

let multiplicateur = 1;


updateArticleList();


$('#more-info').click(function() {
    multiplicateur++;
    console.log(multiplicateur);
    updateArticleList();
});

function updateArticleList() {
    $.each($('#list-article').find('.card-article'), function(key, value) {
        if (key > (6 * multiplicateur - 1)) {
            $(this).css("display", "none");
        } else {
            $(this).css("display", "flex");
        }
    });

    if ($('#list-article').find('.card-article').length <= (6 * multiplicateur)) {
        $('#more-info').css("display", "none");
    }
}