$(document).click(function(event) {
  event.preventDefault();
  renderList()
})


function renderList() {
  if ($('#foo').length !== 1) {    
    var foo = document.createElement("div");
    foo.setAttribute('id', 'foo')
    document.body.appendChild(foo)     
    getAllFonts()
  }
}


function getAllFonts(){
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyCtnKRCf_cI3iQ7WZrU19_GmDeFDmoohCw",
  }).done(function(fonts) {
    fonts_arr = []
    fonts.items.forEach((font)=> {
        fonts_arr.push({category: font.category, family: font.family})
    })
    createList(fonts_arr)
  })
}


function createList(fonts_arr) {
  root = "http://fonts.googleapis.com/css?family="
  fonts_arr = fonts_arr.slice(0,175)
  var fonts_list = fonts_arr.map((font) => {
    root += font.family + "|"
    return React.createElement('option', {value: font.family}, font.family)
  })
  var select = React.createElement('select', {id: '__extension__'}, fonts_list)
  ReactDOM.render(select, document.getElementById('foo'))
  document.getElementById("__extension__").addEventListener('change', getFont)
}

function getFont() {
  var font = $('#__extension__').val()
  $('h1').css('font-family', font)
}