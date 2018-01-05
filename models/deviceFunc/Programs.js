"use strict";

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
