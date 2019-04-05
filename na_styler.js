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
      document.head.appendChild(fancySheet);

      // Allows the user to choose between 5 different style sheets that were created by clicking thumbnail images from a figure box
      var figBox = document.createElement("figBox");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      // This will populate the figure box with preview images of the 5 fancy style sheets
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");

            // The browser will load a different style sheet when the user clicks one of the thumbnails
            sheetImg.onclick = function (e) {}
      }
}

function randInt(size) {
      return Math.floor(size * Math.random());
}