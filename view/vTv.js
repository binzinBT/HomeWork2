"use strict";
function ViewTv (tv, idDevice, rootElement) {
  this._tv = tv;
  this._id = idDevice;
  this._rootElement = rootElement;
}

ViewTv.prototype.render = function () {
  var self = this;
  var tvDiv = document.createElement("div");
  tvDiv.className = "device";
  tvDiv.setAttribute("id", this._id);
  tvDiv.innerHTML = this._tv._name;

  this._rootElement.appendChild(tvDiv);
};