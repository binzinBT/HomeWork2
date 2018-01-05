"use strict";

//Громкость
function Volume( maxVol ) {
  this._maxVol = Insp.checkPositiveNum( maxVol );
  this._curVol = 0;
  this._mute = false;
}

Volume.prototype.getCurrentVolume = function () {
  return this._curVol;
};

Volume.prototype.getMaxVolume = function () {
  return this._maxVol;
};

Volume.prototype.volumeUp = function () {
  if ( this._curVol < this._maxVol ) {
    this._curVol++;
  }
};

Volume.prototype.volumeDown = function () {
  if ( this._curVol > 0 ) {
    this._curVol--;
  }
};

Volume.prototype.setVolume = function (value) {
  if (Insp.checkNum(value)) {
    if (( value >= 0 ) && (value <= this._maxVol)){
      this._curVol = value;
    }
  }
};

Volume.prototype.mute = function (bool) {
  if (typeof bool === "boolean") {
    this._mute = bool;
  }
  return this._mute;
};