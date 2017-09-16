$(".menu-button-fr").click(function() {
    console.log("open");
    openNav('frSideNav')
});

$('.closebtn').click(function() {
    console.log("close");
    closeNav('frSideNav');
});

$('.menu-item').click(function() {

    console.log('test', $(this), $(this).data('lang'));
    clickOnMenu($(this).data('lang'), $(this).data('section'))

});

function openNav(id) {
    document.getElementById(id).style.width = "100%";
    document.getElementById(id).getElementsByClassName("sidenav")[0].style.width = "250px";
    document.getElementById(id).style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav(id) {
    document.getElementById(id).style.width = "0";
    document.getElementById(id).getElementsByClassName("sidenav")[0].style.width = "0";
}

function clickOnMenu(lang, section) {

    $('#' + lang + "Page").animate({
            scrollTop: ($('#' + section).offset().top - 65)
        },
        600);

    closeNav(lang + "SideNav");

}