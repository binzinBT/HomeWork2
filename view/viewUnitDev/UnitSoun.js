"use strict";
function UnitSound (idDevice, parentObj) {
  // crop for divColor
  var crop = 1.19;

  var btnClickMuteOn = function () {
    colorDiv.style.background = "#bdc3c7";
    btnVolMute.innerHTML = `<img src="./img/muteOn24.png" >`;
    parentObj.mute(true);
    divStatusVol.style.textAlign = "center";
    divStatusVol.style.marginLeft = "0px";
    divStatusVol.innerHTML = "MUTE";
  };

  var btnClickMuteOff = function () {
    colorDiv.style.background = "";
    btnVolMute.innerHTML = `<img src="./img/muteOff24.png" >`;
    parentObj.mute(false);
    divStatusVol.innerHTML = "ГРОМКОСТЬ : " + parentObj.getCurVolume();
    divStatusVol.style.textAlign = "";
    divStatusVol.style.marginLeft = "";
  };

  // main DIV volume
  var divVolume = document.createElement("div");
  divVolume.className = "divVolume";
  divVolume.setAttribute("id", "dVol"+idDevice);
  divVolume.style.visibility = "hidden";

  // status sound "MUTE" or "Громкость"
  var divStatusVol = document.createElement("div");
  divStatusVol.setAttribute("id", "dsv" + idDevice);
  divStatusVol.className = "divStatusVol";
  divStatusVol.innerHTML = "ГРОМКОСТЬ";
  divVolume.appendChild(divStatusVol);

  // Button volume Mute
  var btnVolMute = document.createElement("button");
  btnVolMute.type = "button";
  btnVolMute.className = "btnVolMute";
  btnVolMute.innerHTML = `<img src="./img/muteOff24.png" >`;
  btnVolMute.addEventListener("click", function () {
    parentObj.mute() ? btnClickMuteOff() : btnClickMuteOn();
  });
  divVolume.appendChild(btnVolMute);

  // Button volume Up
  var btnVolUp = document.createElement("button");
  btnVolUp.type = "button";
  btnVolUp.className = "btnVolUp";
  btnVolUp.innerHTML = `<img src="./img/plus24.png" >`;
  btnVolUp.addEventListener("click", function () {
    if (parentObj.getMaxVolume() >= parentObj.getCurVolume()) {
      if (parentObj.mute()) {btnClickMuteOff()}
      var rng=document.getElementById("rv" + idDevice); //rng - это Input
      var divColor=document.getElementById("slcv"+ idDevice); // div - блок
      ++rng.value;
      divColor.style.width= rng.value * crop +'px';
      divStatusVol.innerHTML = "ГРОМКОСТЬ : " + rng.value;
      parentObj.volUp();
    }
  });
  divVolume.appendChild(btnVolUp);

  // Button volume Down
  var btnVolDown = document.createElement("button");
  btnVolDown.type = "button";
  btnVolDown.className = "btnVolDown";
  btnVolDown.innerHTML = `<img src="./img/minus24.png" >`;
  btnVolDown.addEventListener("click", function () {
    if (0 <= parentObj.getCurVolume()) {
      if (parentObj.mute()) {btnClickMuteOff()}
      var rng=document.getElementById("rv" + idDevice); //rng - это Input
      var divColor=document.getElementById("slcv"+ idDevice); // div - блок
      --rng.value;
      divColor.style.width= rng.value * crop +'px';
      divStatusVol.innerHTML = "ГРОМКОСТЬ : " + rng.value;
      parentObj.volDown();
    }
  });
  divVolume.appendChild(btnVolDown);

  // Color DIV for volume
  var colorDiv = document.createElement("div");
  colorDiv.className = "slColorVol";
  colorDiv.setAttribute("id", "slcv"+ idDevice);
  divVolume.appendChild(colorDiv);

  // Slider volume load
  var slider = document.createElement("input");
  slider.className = "sliderVol";
  slider.type = "range";
  slider.setAttribute("id", "rv" +idDevice);
  slider.value = 0;
  slider.oninput = function () {
    var rng=document.getElementById("rv" + idDevice); //rng - это Input
    var divColor=document.getElementById("slcv"+ idDevice); // div - блок
    divColor.style.width= rng.value * crop +'px';
    divStatusVol.innerHTML = "ГРОМКОСТЬ : " + rng.value;
    parentObj.setVol(rng.value);
    if (parentObj.mute()) {btnClickMuteOff()}
  };
  divVolume.appendChild(slider);

  return divVolume;
}