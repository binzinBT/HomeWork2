"use strict";
function ViewIllumination ( illumination, id, rootElement) {
  this._illumination = illumination;
  this._id = id;
  this._rootElement = rootElement;
}

ViewIllumination.prototype.render = function () {
  var self = this;
  var idDevice = this._id;
  var nameIllum = " Освещение - " + this._illumination._name;
  var illumDiv = document.createElement("div");
  illumDiv.className = "device";
  illumDiv.setAttribute("id", idDevice);
  illumDiv.innerHTML = nameIllum;

  // Power button
  var statePowerBtn = document.createElement("button");
  statePowerBtn.type = "button";
  statePowerBtn.className = "btnPow";
  statePowerBtn.innerHTML = `<img src="./img/off64.png" >`;
  statePowerBtn.addEventListener("click", function () {
    if (!self._illumination.getPowerStatus()){
      self._illumination.on();
      slider.style.visibility = "visible";
      light.style.visibility = "visible";
      divBright.innerHTML = "ЯРКОСТЬ : " + self._illumination.getLoad();
      statePowerBtn.innerHTML = `<img src="./img/on64.png" >`;
      imgLamp.src = "./img/lampOn.png"
    } else {
      self._illumination.off();
      slider.style.visibility = "hidden";
      light.style.visibility = "hidden";
      divBright.innerHTML = "ВЫКЛЮЧЕНО";
      statePowerBtn.innerHTML = `<img src="./img/off64.png" >`;
      imgLamp.src = "./img/lampOff.png"
    }
  });
  illumDiv.appendChild(statePowerBtn);

  // Lamp on/off
  var imgLamp = document.createElement("img");
  imgLamp.setAttribute("src", "./img/lampOff.png");
  imgLamp.setAttribute("id", "imgL"+ idDevice);
  imgLamp.className = "imgLamp";
  illumDiv.appendChild(imgLamp);

  // DIV for illumination load
  var divSlider = document.createElement("div");
  divSlider.className = "divSlider";
  divSlider.setAttribute("id", "dsl"+idDevice);
  illumDiv.appendChild(divSlider);

  var valBright = 0;
  var divBright = document.createElement("div");
  divBright.setAttribute("id", "dbr" + idDevice);
  divBright.className = "divBright";
  divBright.innerHTML = "ВЫКЛЮЧЕНО";
  divSlider.appendChild(divBright);

  // Color DIV for change illum load
  var light = document.createElement("div");
  light.className = "slColor";
  light.setAttribute("id", "sl"+ idDevice);
  divSlider.appendChild(light);

  // Slider illum load
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

  // Button remove illumination device
  var delDevice = document.createElement("div");
  delDevice.className = "delIllumDiv";
  var delDevBtn = document.createElement("a");
  delDevBtn.type = "a";
  delDevBtn.innerHTML = " УДАЛИТЬ УСТРОЙСТВО ";
  delDevBtn.className = "delElem";
  delDevBtn.addEventListener("click", function () {
    if (confirm(`Вы действительно хотите удалить - "${nameIllum}"`)) {
      var idRoom = ((idDevice - (idDevice % 100)) / 100);

      VIEW_HOUSE._house.removeDevice(idRoom, idDevice);
      var r =  document.getElementById(idDevice);
      r.parentNode.removeChild(r);
    }
  });
  delDevice.appendChild(delDevBtn);
  illumDiv.appendChild(delDevice);

  self._rootElement.appendChild(illumDiv);
};


