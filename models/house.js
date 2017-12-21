"use strict";
function House () {
  this._name = "My house";
  this._listRoom = [];
}

House.prototype.addRoom = function (obj) {
    this._listRoom.push(obj);
};

House.prototype.removeRoom = function (nameRoom) {
  for (var i = 0; i < this._listRoom.length; i++){
    if (this._listRoom[i]._room._name == nameRoom){
      this._listRoom.splice( i, 1);
      break;
    }
  }
};

House.prototype.removeDevice = function (idRoom, idDevice) {
  for (var i = 0; i < this._listRoom.length; i++){
    if (this._listRoom[i]._room._id == idRoom){
      for (var j = 0; j < this._listRoom[i]._room._listDevice.length; j++){
        if (this._listRoom[i]._room._listDevice[j]._id == idDevice){
          this._listRoom[i]._room._listDevice.splice(j, 1);
          break;
        }
      }
      break;
    }
    alert("i = " + i);
  }

};

