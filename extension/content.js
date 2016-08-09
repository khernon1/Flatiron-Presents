$(document).click(function(event) {  
  event.preventDefault();
  var clicked = event.target
  // var element = clicked.tagName
  createFoo(clicked)

  function createFoo(clicked) {
    if ($('#foo').length !== 1) {    
      var foo = document.createElement("div");
      foo.setAttribute('id', 'foo')
      clicked.appendChild(foo)
      // document.body.appendChild(foo)  
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
    fonts_arr = fonts_arr.slice(0,175)
    var fonts_list = fonts_arr.map((font) => {
      root += font.family + "|"
      var option = document.createElement('option')
      option.value = font.family
      option.text = font.family
      return option
      // return React.createElement('option', {value: font.family}, font.family)
    }) 
  
  
    var fonts_link = document.createElement('link');fonts_link.rel='stylesheet';fonts_link.type='text/css';fonts_link.href= root;document.getElementsByTagName('body')[0].appendChild(fonts_link);   
    var select = document.createElement('select');select.id="__extension__";


    document.getElementById('foo').appendChild(select)
    
     for (var i = 0; i < fonts_list.length; i++) {
      document.getElementById('__extension__').appendChild(fonts_list[i])
     }
      

    // var select = React.createElement('select', {id: '__extension__'}, fonts_list)    
    // ReactDOM.render(select, document.getElementById('foo'))
    document.getElementById("__extension__").addEventListener('change', changeFont)
  }

  function changeFont() {
    // $('select > option').hover(function() {
        // $(clicked).css({fontFamily:$(this).val()}) 
    var font = $('#__extension__').val()
    $(clicked).css('font-family', font)
  // })
  }
})