$(function () {
    let currentElement

    $('.kanban__card').each(function (i) {
        $(this).attr('draggable', true);

        $(this).on('dragstart', function (event) {
            $(this).addClass('kanban__card--dragging');
        });

        $(this).on('dragend', function (event) {
            $(this).removeClass('kanban__card--dragging')
        });
    })

    $('.kanban__cards').on('dragover', function (event) {
        event.preventDefault();

        const activeElement = $('.kanban__card--dragging');
        currentElement = event.target;

        if ($(currentElement).hasClass('kanban__cards')) {
            $(activeElement).appendTo(currentElement);
        } else if ($(currentElement).hasClass('kanban__card')) {
            $(activeElement).insertBefore(currentElement);
        }
    });
});