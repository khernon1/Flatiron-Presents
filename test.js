// $(document).ready(() => {

  document.onclick = myClickHandler;
    function myClickHandler() {
     var clicked = event.target
     console.log
     var click_font = $(clicked).css('font-family')
     console.log(click_font)
    }
    
