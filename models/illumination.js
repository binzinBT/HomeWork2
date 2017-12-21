"use strict";
function Illumination( name, power, load) {
  this._name = name;
  this._power = power;
  this._load = load;
}


Illumination.prototype.on = function() {
  this._power.powerOn();
};

Illumination.prototype.off = function () {
  this._power.powerOff();
};

Illumination.prototype.getPowerStatus = function () {
  return this._power.getPowerStatus();
};

Illumination.prototype.setLoad = function ( newLoad ) {
  this._load.setDeviceLoad( newLoad );
};

Illumination.prototype.getLoad = function () {
  return this._load.getDeviceLoad();
};

Illumination.prototype.loadIncrease = function () {
  this._load.loadDeviceIncrease();
};

Illumination.prototype.loadDecrease = function () {
  this._load.loadDeviceDecrease();
};

