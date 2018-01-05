"use strict";

function imgForDevise (imgSrc) {
  var obj = document.createElement("img");
  obj.setAttribute("src", imgSrc);
  obj.className = "imgDev";
  return obj
}
