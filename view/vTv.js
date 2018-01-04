"use strict";
function ViewTv (tv, idDevice, rootElementId) {
  this._tv = tv;
  this._id = idDevice;
  this._rootElementId = rootElementId;
}

ViewTv.prototype.render = function () {
  var self = this;
  var idDevice = this._id;
  var nameDevice = "TV - " + this._tv.getName();

  // Div device TV
  var tvDiv = document.createElement("div");
  tvDiv.className = "device";
  tvDiv.setAttribute("id", idDevice);
  tvDiv.innerHTML = nameDevice;

  // func for power button from powerDivOnOff when
  function eventClickPowerBtn () {
    if (!self._tv.getPowerStatus()){
      imgDev.src = "./img/tvOn72.png";
      divVolume.style.visibility = "visible";
      divChannel.style.visibility = "visible";

    } else {
      imgDev.src = "./img/tvOff72.png";
      divVolume.style.visibility = "hidden";
      divChannel.style.visibility = "hidden";
    }
  }

  // main div power on/off
  var powerDivOnOff = new UnitPowerDev(this._tv, eventClickPowerBtn);
  tvDiv.appendChild(powerDivOnOff);

  // img TV on/off
  var imgDev = imgForDevise("./img/tvOff72.png");
  powerDivOnOff.appendChild(imgDev);

  // DIV for channel
  var divChannel = new UnitPrograms(this._tv, "ТЕЛЕКАНАЛ-");
  tvDiv.appendChild(divChannel);

  // DIV for volume
  var divVolume = new UnitSound(idDevice, this._tv);
  tvDiv.appendChild(divVolume);

  // div Button remove illumination device
  var delDivDevice = new UnitRemoveDevice(idDevice, nameDevice);
  tvDiv.appendChild(delDivDevice);

  var root = document.getElementById(this._rootElementId);
  root.appendChild(tvDiv);
};

