"use strict";
function Room ( name, id ) {
  this._name = name;
  this._id = id;
  this._listDevice = [];

}

Room.prototype.addDevice = function( device ) {
  this._listDevice.push(device);
};
Room.prototype.getNameRoom = function () {
  return this._name;
};
Room.prototype.getIdRoom = function () {
  return this._id;
};



//var room = new Room("Клад");

