let testTasks = {
    "tasks": [
        {
            "id": "1",
            "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "status": 0,
            "indicators": {
                "comments": {
                    "count": 3,
                    "updates": true,
                }
            },
            "date": "01.05.2023",
        },
        {
            "id": "2",
            "name": "Задача",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "status": 0,
            "indicators": {
                "comments": {
                    "count": 3,
                    "updates": false,
                }
            },
            "date": "02.05.2023",
        },
        {
            "id": "3",
            "name": "Задача",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "status": 0,
            "indicators": {
                "comments": {
                    "count": 3,
                    "updates": false,
                }
            },
            "date": "02.05.2023",
        },
        {
            "id": "4",
            "name": "Задача",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "status": 1,
            "indicators": {
                "comments": {
                    "count": 3,
                    "updates": false,
                }
            },
            "date": "03.05.2023",
        },
        {
            "id": "5",
            "name": "Задача",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "status": 1,
            "indicators": {
                "comments": {
                    "count": 3,
                    "updates": true,
                }
            },
            "date": "03.05.2023",
        },
        {
            "id": "6",
            "name": "Задача",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "status": 2,
            "indicators": {
                "comments": {
                    "count": 3,
                    "updates": false,
                }
            },
            "date": "02.05.2023",
        },
        {
            "id": "7",
            "name": "Задача",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "status": 2,
            "indicators": {
                "comments": {
                    "count": 3,
                    "updates": true,
                }
            },
            "date": "04.05.2023",
        },
        {
            "id": "8",
            "name": "Задача",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "status": 2,
            "indicators": {
                "comments": {
                    "count": 3,
                    "updates": false,
                }
            },
            "date": "02.05.2023",
        }
    ]
}

$.each(testTasks.tasks, function (index, item) {
    let task_card = $('<div>').addClass('kanban__card')

    $('<div>').addClass('kanban__name').html(item.name).appendTo(task_card)
    $('<div>').addClass('kanban__description').html(item.description).appendTo(task_card)
    let card_extra = $('<div>').addClass('kanban__extra').appendTo(task_card)

    let extra_indicators = $('<div>').addClass('kanban__indicators').appendTo(card_extra)

    $.each(item.indicators, function (index, indicator_item) {

        let indicator = $('<div>').addClass('kanban__indicator').appendTo(extra_indicators)

        if (indicator_item.updates) {
            indicator.addClass('kanban__indicator--updates')
        }

        $('<div>').addClass('kanban__icon').html(
            `<svg class="svg">
                <use xlink: href = "#icon-comment"/>
            </svg >`
        ).appendTo(indicator)

        $('<div>').addClass('kanban__count').html(indicator_item.count).appendTo(indicator)
    })

    $('<div>').addClass('kanban__date').html(item.date).appendTo(card_extra)

    let columnToAppend = $("div").find(`[data-col_id='${item.status}']`)
    $(task_card).appendTo(columnToAppend.find('.kanban__cards'))

    $(task_card).click(function () {
        let card = $(".card")

        card.find(".card__name").find("h2").html(item.name)

        let columnName = $("div").find(`[data-col_id='${item.status}']`).children('h2').html()
        console.log(columnName)

        card.find(".card__status").find("h2").html(`Статус: ${columnName}`)

        card.find(".card__date").find("span").html(`Создано: ${item.date}`)

        card.find(".card__description").find("textarea").val(item.description)
    })
})
