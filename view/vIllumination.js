"use strict";
function ViewIllumination( illumination, rootElement) {
  this._illumination = illumination;
  this._name = name;
  this._rootElement = rootElement;
}


ViewIllumination.prototype.render = function() {
  var self = this;
  var illumination = document.createElement("div");
  illumination.className = "device";
  illumination.innerHTML = " Освещение - " + this._illumination._name;

  this._rootElement.appendChild(illumination);


};


