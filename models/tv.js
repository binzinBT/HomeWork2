"use strict";

function Tv (name, programs, volume) {
  this._name = name;
  this._programs = programs;
  this._volume = volume;
}
// Power
Tv.prototype = Object.create(Power.prototype);
Tv.prototype.constructor = Tv;

Tv.prototype.getName = function () {
  return this._name;
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

Tv.prototype.getListPrograms = function () {
  return this._programs.getListPrograms();
};

// Volume
Tv.prototype.volUp = function () {
  this._volume.volumeUp();
};

Tv.prototype.volDown = function () {
  this._volume.volumeDown();
};

Tv.prototype.setVol = function (val) {
  this._volume.setVolume(val);
};

Tv.prototype.getCurVolume = function () {
  return this._volume.getCurrentVolume();
};

Tv.prototype.getMaxVolume = function () {
  return this._volume.getMaxVolume();
};

Tv.prototype.mute = function (bool) {
  return this._volume.mute(bool);
};