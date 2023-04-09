let testProjects = {
    "projects" : [
      {
        "id" : "1",
        "name" : "Проект 1",
        "client" : "Заказчик 1",
        "archieved" : false
      },
      {
        "id" : "2",
        "name" : "Проект 2",
        "client" : "Заказчик 2",
        "archieved" : false
      },
      {
        "id" : "3",
        "name" : "Проект 3",
        "client" : "Заказчик 3",
        "archieved" : false
      },
      {
        "id" : "4",
        "name" : "Проект 4",
        "client" : "Заказчик 4",
        "archieved" : false
      },
      {
        "id" : "5",
        "name" : "Проект 5",
        "client" : "Заказчик 5",
        "archieved" : false
      },
      {
        "id" : "6",
        "name" : "Проект 6",
        "client" : "Заказчик 6",
        "archieved" : false
      },
      {
        "id" : "7",
        "name" : "Проект 7",
        "client" : "Заказчик 7",
        "archieved" : false
      },
      {
        "id" : "8",
        "name" : "Проект 8",
        "client" : "Заказчик 8",
        "archieved" : false
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
      {
        "id" : "0",
        "name" : "Архивный проект",
        "client" : "Заказчик",
        "archieved" : true
      },
    ]
  }


$.each(testProjects.projects, function(index, item) {
    let project_link = $('<a>').addClass('projects-list__item')

    if (item.archieved) {
      project_link.appendTo('.archieve__list')
    } else {
      project_link.appendTo('.projects-list')
    }
        
    $('<span>').addClass('projects-list__item-name').text(item.name).appendTo(project_link)
    $('<span>').addClass('projects-list__item-client').text(item.client).appendTo(project_link)

    $(project_link).click(function() {
        $('.projects-list__item').removeClass('projects-list__item--active');
        $(this).addClass('projects-list__item--active');
    })
})
