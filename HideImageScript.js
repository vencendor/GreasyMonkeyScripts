// ==UserScript==
// @name     Script Img hidder
// @version  1
// @grant    none
// @include  http*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==


$(document).ready(function() {  
  
  
  $('body').append('<a id="hide_images_link" href="javascript:;" style="position: fixed; top:0px;  right:0px; z-index: 1000;"> hide img </a>');
 
  
  $("#hide_images_link").click( function(){
	
    console.log( this );

    $('img').hide();
    $('iframe').hide();



  })
});



