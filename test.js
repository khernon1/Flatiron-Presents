// $(document).ready(() => {



  // document.onclick = myClickHandler;
  //   function myClickHandler() {
  //     var jq = document.createElement('script');
  //     jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
  //    var clicked = event.target
  //    $(clicked).append($(clicked).css('font-family'))
  //   }

// $('.clear-articles h3').css('font-family', billy_font)
// $('.artist-name h3').css('font-size', '100px')

var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('body')[0].appendChild(script);

$('body').append('<form onsubmit="changeColor()"><input id="font" type="text"><button type="submit"> </button> </form>')

function changeColor() { 
  event.preventDefault();
  var font = $('#font').val()
  // $('#color').on('click', function(){
     $('h1').css('font-family', font)
  // })
}
