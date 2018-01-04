"use strict";
//Питание
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

// Нагрузка на устройство
function DeviceLoad ( minLoad, maxLoad ) {
  this._minLoad = Insp.checkNum( minLoad );
  this._maxLoad = Insp.checkPositiveNum ( maxLoad );
  this._curDeviceLoad = 0;
}

DeviceLoad.prototype.setDeviceLoad = function ( curLoad ) {
  if ( ( Insp.checkNum(curLoad) )
    && ( curLoad <= this._maxLoad )
    && ( curLoad >= this._minLoad ) ){
      this._curDeviceLoad = curLoad;
  }
};

DeviceLoad.prototype.getDeviceLoad = function () {
  return this._curDeviceLoad;
};

DeviceLoad.prototype.loadDeviceIncrease = function() {
  if ( this._curDeviceLoad < this._maxLoad ) {
    ++this._curDeviceLoad;
  }
};

DeviceLoad.prototype.loadDeviceDecrease = function() {
  if ( this._curDeviceLoad > this._minLoad ) {
    --this._curDeviceLoad;
  }
};


// Список программ в устройстве
function Programs ( arr ) {
  this._currentProgramIndex = 0;
  this._listPrograms = arr;
}

Programs.prototype.programNext = function() {
  if ( this._currentProgramIndex < this._listPrograms.length-1 ) {
    this._currentProgramIndex++;
  }
};

Programs.prototype.programPrev = function() {
  if ( this._currentProgramIndex > 0 ) {
    this._currentProgramIndex--;  
  }
};

Programs.prototype.getProgramIndex = function() {
  return this._currentProgramIndex
};

Programs.prototype.setProgramIndex = function(progIndex) {
  if ( ( 0 < progIndex ) && ( progIndex < this._listPrograms.length-1 ) ) {
    this._currentProgramIndex = progIndex;
  }
};

Programs.prototype.getListPrograms = function () {
  return this._listPrograms;
};

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