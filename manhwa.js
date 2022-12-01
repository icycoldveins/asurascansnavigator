// ==UserScript==
// @name         navigation asura
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  specifically for asura scans, navigate left and right for prev and next respectively
// @author       icycoldveins
// @match        *://*.asura.gg/*
// @license      MIT
// @icon         none
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  // ch-next-btn
  // ch-prev-btn
  //next page-numbers
  //prev page-numbers

  // navigate using arrow left key and arrow right key
  document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft") {
      // if class ch-prev-btn exists, click it else click prev page-numbers
      if (document.getElementsByClassName("ch-prev-btn")[0]) {
        document.getElementsByClassName("ch-prev-btn")[0].click();
      } else {
        document.getElementsByClassName("prev page-numbers")[0].click();
      }
    }
    if (event.key == "ArrowRight") {
      // if class ch-next-btn exists, click it else click next page-numbers
      if (document.getElementsByClassName("ch-next-btn")[0]) {
        document.getElementsByClassName("ch-next-btn")[0].click();
      } else {
        document.getElementsByClassName("next page-numbers")[0].click();
      }
    }
  });
})();
