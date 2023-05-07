let testDocuments = {
    "documents" : [
      {
        "flag": false,
        "time" : "18 сентября 2023",
        "name" : "Ежемесячный отчет 1"
      },
      {
        "flag": false,
        "time" : "18 июля 2023",
        "name" : "Ежемесячный отчет 2"
      }
    ]
  }


$.each(testDocuments.documents, function(index, item) {
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
