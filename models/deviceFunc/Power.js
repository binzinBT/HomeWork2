"use strict";

// power for all device
function Power (){
  this._powerStatus = false;
}

Power.prototype.powerOn = function() {
  this._powerStatus = true;
};

Power.prototype.powerOff = function() {
  this._powerStatus = false;
};

Power.prototype.getPowerStatus = function() {
  return this._powerStatus;
};