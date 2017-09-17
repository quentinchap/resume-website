$(".menu-button-fr").click(function() {
    console.log("open");
    openNav('frSideNav')
});

$('.closebtn').click(function() {
    console.log("close");
    closeNav('frSideNav');
});

$('.menu-item').click(function() {
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

    console.log(lang, section, $('#' + section));



    let lastElementTop = $('#' + section).position().top;
    let scrollAmount = lastElementTop - 60;

    $('html,body').animate({ scrollTop: scrollAmount }, 1000);

    closeNav(lang + "SideNav");

}