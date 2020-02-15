// ==UserScript==
// @name     Script Img hidder
// @version  1
// @grant    none
// @include  https://www.kinopoisk.ru/film/
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==


$(document).ready(function() {  
    
  var film_name = $('h1.moviename-big span').html(); 
  console.log( film_name );
  $('h1.moviename-big span').appendAffter("<a href='https://rezka.ag/index.php?do=search&subaction=search&q="
  + film_name +"'>" + film_name + "</a>");
 
  
});

