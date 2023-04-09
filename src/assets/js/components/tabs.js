$(document).ready(function () {
    // При нажатии на элементы меню
    $('.tab').click(function () {

        // Удаляем класс 'active' у всех элементов меню
        $('.tab').removeClass('tab--active');

        // Добавляем класс 'active' к выбранному элементу меню
        $(this).addClass('tab--active');

        // Получаем идентификатор выбранной вкладки
        var tabId = $(this).attr('href');

        // Скрываем все вкладки
        $('.content__tab-pane').removeClass('content__tab-pane--active');

        // Отображаем выбранную вкладку
        $(tabId).addClass('content__tab-pane--active');

        // Отменяем стандартное поведение ссылки
        return false;
    });
});