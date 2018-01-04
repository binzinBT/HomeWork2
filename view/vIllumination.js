"use strict";
function ViewIllumination ( illumination, id, rootElementId) {
  this._illumination = illumination;
  this._id = id;
  this._rootElementId = rootElementId;
}

ViewIllumination.prototype.render = function () {
  var self = this;
  var idDevice = this._id;
  var nameDevice = " Освещение - " + this._illumination.getName();
  var illumDiv = document.createElement("div");
  illumDiv.className = "device";
  illumDiv.setAttribute("id", idDevice);
  illumDiv.innerHTML = nameDevice;

  // func for power button from powerDivOnOff
  function eventClickPowerBtn () {
    if (!self._illumination.getPowerStatus()){
      slider.style.visibility = "visible";
      light.style.visibility = "visible";
      divBright.innerHTML = "ЯРКОСТЬ : " + self._illumination.getLoad();
      imgDev.src = "./img/lampOn.png"
    } else {
      slider.style.visibility = "hidden";
      light.style.visibility = "hidden";
      divBright.innerHTML = "ВЫКЛЮЧЕНО";
      imgDev.src = "./img/lampOff.png"
    }
  }

  // main div power on/off
  var statusDiv = new UnitPowerDev(this._illumination, eventClickPowerBtn);
  illumDiv.appendChild(statusDiv);

  // img Lamp on/off
  var imgDev = imgForDevise("./img/lampOff.png");
  statusDiv.appendChild(imgDev);

  // DIV for illumination load
  var divSlider = document.createElement("div");
  divSlider.className = "divSlider";
  divSlider.setAttribute("id", "dsl"+idDevice);

  var valBright = 0;
  var divBright = document.createElement("div");
  divBright.setAttribute("id", "dbr" + idDevice);
  divBright.className = "divBright";
  divBright.innerHTML = "ВЫКЛЮЧЕНО";
  divSlider.appendChild(divBright);

  // Color DIV for change illumination load
  var light = document.createElement("div");
  light.className = "slColor";
  light.setAttribute("id", "sl"+ idDevice);
  divSlider.appendChild(light);

  // Slider illumination load
  var slider = document.createElement("input");
  slider.className = "sliderLoad";
  slider.type = "range";
  slider.setAttribute("id", "r" +idDevice);
  slider.value = 0;
  slider.style.visibility = "hidden";
  slider.oninput = function () {
    var rng=document.getElementById("r" + idDevice); //rng - это Input
    var div=document.getElementById("sl"+ idDevice); // div - блок
    valBright = rng.value;
    div.style.width= valBright * 1.8 +'px';
    divBright.innerHTML = "ЯРКОСТЬ : " + valBright;
    self._illumination.setLoad(valBright);
  };
  divSlider.appendChild(slider);
  illumDiv.appendChild(divSlider);

  // div Button remove illumination device
  var delDevice = new UnitRemoveDevice(idDevice, nameDevice);
  illumDiv.appendChild(delDevice);

  document.getElementById(this._rootElementId).appendChild(illumDiv);
};


