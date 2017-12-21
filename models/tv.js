"use strict";

function Tv (name, power, programs, volume) {
  this._name = name;
  this._power = power;
  this._programs = programs;
  this._volume = volume;
}
// Power
Tv.prototype.on = function () {
  this._power.powerOn();
};

Tv.prototype.off = function () {
  this._power.powerOff();
};

Tv.prototype.getPowerStatus = function () {
  return this._power.getPowerStatus();
};
// List programs
Tv.prototype.channelNext = function () {
  this._programs.programNext();
};

Tv.prototype.channelPrev = function () {
  this._programs.programPrev();
};

Tv.prototype.getChannel = function () {
  this._programs.getProgramIndex();
};

Tv.prototype.setChannel = function (newChannelID) {
  this._programs.setProgramIndex(newChannelID);
};

// Volume
Tv.prototype.volUp = function () {
  this._volume.volumeUp();
};

Tv.prototype.volDown = function () {
  this._volume.volumeDown();
};

Tv.prototype.volMute = function () {
  this._volume.volumeMute();
};