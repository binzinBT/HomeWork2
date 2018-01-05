"use strict";

function Radio (name, programs, volume) {
  this._name = name;
  this._programs = programs;
  this._volume = volume;
  Power.apply(this);
}
// Power
Radio.prototype = Object.create(Power.prototype);
Radio.prototype.constructor = Radio;

Radio.prototype.getName = function () {
  return this._name;
};

// List programs
Radio.prototype.channelNext = function () {
  this._programs.programNext();
};

Radio.prototype.channelPrev = function () {
  this._programs.programPrev();
};

Radio.prototype.setChannel = function (newChannelID) {
  this._programs.setProgramIndex(newChannelID);
};

Radio.prototype.getListPrograms = function () {
  return this._programs.getListPrograms();
};

// Volume
Radio.prototype.volUp = function () {
  this._volume.volumeUp();
};

Radio.prototype.volDown = function () {
  this._volume.volumeDown();
};

Radio.prototype.setVol = function (val) {
  this._volume.setVolume(val);
};

Radio.prototype.getCurVolume = function () {
  return this._volume.getCurrentVolume();
};

Radio.prototype.getMaxVolume = function () {
  return this._volume.getMaxVolume();
};

Radio.prototype.mute = function (bool) {
  return this._volume.mute(bool);
};