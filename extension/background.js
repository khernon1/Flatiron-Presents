// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action (icon)
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
    var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('body')[0].appendChild(script);

  document.addEventListener('click', function() {

    debugger

    $('body').append('<form onsubmit="changeColor()"><input id="font" type="text"><button type="submit"> </button> </form>')

    function changeColor() {
      event.preventDefault();
      var font = $('#font').val()
      // $('#color').on('click', function(){
         $('h1').css('font-family', font)
      // })
    }

  })
  // console.log("Turning blue!");
  // chrome.tabs.executeScript({
  //   code: 'document.body.style.backgroundColor="blue"'
  // });
});

chrome.browserAction.setIcon({path:"icon-notification.png"});
