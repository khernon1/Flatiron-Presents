$(document).click(function(event) {
  event.preventDefault();
  renderList()
})


function renderList() {
  if ($('#__extension__').length !== 1) {    
    var div = document.createElement("div");
    div.setAttribute('id', '__extension__')
    document.body.appendChild(div)
    getAllFonts()
    // var script = React.createElement('script', {id: "__extension__"})
    // document.body[0].appendChild(script)
    // ReactDOM.render(script, document.getElementsByTagName('body'))
    // $('body').append('<script id="__extension__" </script>')
    // $('body').append('<form id="_formo_" onclick="getFont()"><input id="font" type="text"><button type="submit"> </button> </form>')    
  }
}


function getAllFonts(){
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCtnKRCf_cI3iQ7WZrU19_GmDeFDmoohCw",
  }).done(function(fonts) {
    fonts_arr = []
    fonts.items.forEach((font)=> {
        fonts_arr.push({category: font.category, family: font.family})
    })
    addFontsToList(fonts_arr)
  })
}

function addFontsToList(arr) {
  var select_list = React.createElement('select', {id: 'setFont'})
  ReactDOM.render(select_list, document.getElementById('__extension__'))
}

// function getFont() {
//   var font = $('#font').val()
//   $('h1').css('font-family', font)
// }