"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Anthony S,A Gradillas
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

window.addEventListener("load", setStyles);

// This function will aloow one of five style sheets to be randomly selected when the page is opened
function setStyles() {
      // Declares the styleNum variable and uses 5 as the perameter of the randInt functions
      var styleNum = randInt(5);

      var fancySheet = document.createElement("link");
      fancySheet.setAttribute("rel", "stylesheet");
      fancySheet.setAttribute("id", "fancySheet");
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");
}

function randInt(size) {
      return Math.floor(size * Math.random());
}