"use strict";

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