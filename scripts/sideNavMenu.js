function openNav(id) {
    document.getElementById(id).style.width = "100%";
    document.getElementById(id).getElementsByClassName("sidenav")[0].style.width = "250px";
    document.getElementById(id).style.backgroundColor = "rgba(0,0,0,0.4)";

}

function closeNav(id) {
    document.getElementById(id).style.width = "0";
    document.getElementById(id).getElementsByClassName("sidenav")[0].style.width = "0";
}

function clickOnMenu(id, idLanguage, idToAccess) {

    console.log('#' + id, $('#' + idToAccess).offset().top);

    $('#' + idLanguage).animate({
            scrollTop: ($('#' + idToAccess).offset().top - 65)
        },
        600);

    closeNav(id);

}