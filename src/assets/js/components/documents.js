let testDocuments = {
  "documents": [
    {
      "flag": false,
      "date": "18 сентября 2023",
      "name": "Ежемесячный отчет 1"
    },
    {
      "flag": false,
      "date": "18 июля 2023",
      "name": "Ежемесячный отчет 2"
    }
    ,
    {
      "flag": false,
      "date": "18 июля 2023",
      "name": "Ежемесячный отчет 3"
    }
    ,
    {
      "flag": false,
      "date": "18 июля 2023",
      "name": "Ежемесячный отчет 4"
    }
    ,
    {
      "flag": false,
      "date": "18 июля 2023",
      "name": "Ежемесячный отчет 5"
    }
    ,
    {
      "flag": false,
      "date": "18 июля 2023",
      "name": "Ежемесячный отчет 6"
    }
    ,
    {
      "flag": false,
      "date": "18 июля 2023",
      "name": "Ежемесячный отчет 7"
    }
    ,
    {
      "flag": false,
      "date": "18 июля 2023",
      "name": "Ежемесячный отчет 8"
    }
  ]
}
//<div class="doclist">
//   <!-- <div class="doclist__item item"> Jquery 
/* <div class="item__flag">
<svg class="svg">
    <use xlink:href="#flag" />
</svg>
</div> */
//   <div class="item__date">18 Марта<br>2022</div>
//   <div class="item__name">Ежемесячный отчет за Октябрь</div>
//   <div class="item__options option">
//       <div class="option__download">
//           <img src="/assets/images/static/download.svg">
//       </div>
//       <div class="option__delete">
//           <img src="/assets/images/static/delete.svg">
//       </div>
//   </div>
// </div> -->
$.each(testDocuments.documents, function (index, item) {
  const doclist_item = $('<div>').addClass('doclist__item item')

  const item_flag = $('<div>').addClass('item__flag').append('<svg class="svg"><use xlink:href="#flag" /></svg>')
  const item_date = $('<div>').addClass('item__date').text(item.date)
  const item_name = $('<div>').addClass('item__name').text(item.name)
  const item_options = $('<div>').addClass('item__options option')

  const option_download = $('<div>').addClass('option__download').append('<img src="/assets/images/static/download.svg">')
  const option_delete = $('<div>').addClass('option__delete').append('<img src="/assets/images/static/delete.svg">')

  item_options.append(option_download, option_delete)
  doclist_item.append(item_flag, item_date, item_name, item_options)
  doclist_item.appendTo('.doclist')

  $(item_flag).on('click', function() {

    if (this.classList.contains('item__flag--active')) {
      return $(this).removeClass('item__flag--active');
    }
    $(this).addClass('item__flag--active');
  })
})

$('.search__flag').on('click', function()  {
  if (this.classList.contains('search__flag--active')) {
    return $(this).removeClass('search__flag--active');
  }
  $(this).addClass('search__flag--active');
})
