// ==UserScript==
// @name     Kinopoisk
// @version  1
// @grant    none
// @include  https://www.kinopoisk.ru/film/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==


$(document).ready(function() { 
     
  var film_name = $('h1.moviename-big span').html(); 
  console.log( film_name );
  $('h1.moviename-big span').append("<a target='_blank' style='font-size:12px;padding-left:30px;  color: #0000ff; ' href='https://rezka.ag/index.php?do=search&subaction=search&q="
  + film_name +"'>" + film_name + "</a>");
 
  
});
