$(document).click(function(event) {  
  event.preventDefault();
  var clicked = event.target
  createFoo(clicked)

  function createFoo(clicked) {
    if ($('#foo').length !== 1) {    
      var foo = document.createElement("div");
      foo.setAttribute('id', 'foo')
      clicked.appendChild(foo)
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
      renderList(fonts_arr)
    })
  }


  function renderList(fonts_arr) {
    root = "http://fonts.googleapis.com/css?family="
    fonts_arr = fonts_arr.slice(0,100)
    var fonts_list = fonts_arr.map((font) => {
      root += font.family + "|"
      var option = document.createElement('option')
      option.value = font.family
      option.innerHTML = font.family
      $(option).css('font-family', font.family)
      return option
    }) 
  
    var fonts_link = document.createElement('link');fonts_link.rel='stylesheet';fonts_link.type='text/css';fonts_link.href= root;document.getElementsByTagName('body')[0].appendChild(fonts_link);   
    var select = document.createElement('select');select.id="__extension__";

    document.getElementById('foo').appendChild(select)
    
     for (var i = 0; i < fonts_list.length; i++) {
      document.getElementById('__extension__').appendChild(fonts_list[i])
     }
      
    document.getElementById("__extension__").addEventListener('change', changeFont)
  }

  function changeFont() {
    var font = $('#__extension__').val()
    $(clicked).css('font-family', font)
  }
})