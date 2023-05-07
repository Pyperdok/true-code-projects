$(document).ready(function () {
    $('#messenger').click(function () {
        $(".main__messenger-menu").fadeToggle();
    });
    $('.kanban__card').click(function () {
        $(".card").fadeIn();
        $(".black").fadeIn();
    });
    $('.black').click(function () {
        $(".card").fadeOut();
        $(".black").fadeOut();
    });
});