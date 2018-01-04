"use strict";
function Illumination( name, load) {
  this._name = name;
  this._load = load;
}

Illumination.prototype = Object.create(Power.prototype);
Illumination.prototype.constructor = Illumination;


Illumination.prototype.getName = function () {
  return this._name;
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

