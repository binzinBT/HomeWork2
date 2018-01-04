"use strict";

function imgForDevise (imgSrc) {
  var obj = document.createElement("img");
  obj.setAttribute("src", imgSrc);
  obj.className = "imgDev";
  return obj
}

function UnitPowerDev ( parentObj, funcEventClick ) {
  // Div power on/off
  var statusDiv = document.createElement("div");
  statusDiv.className = "statusDiv";

  // Power button on/off
  var statePowerBtn = document.createElement("button");
  statePowerBtn.type = "button";
  statePowerBtn.className = "btnPow";
  statePowerBtn.innerHTML = `<img src="./img/off64.png" >`;
  statePowerBtn.addEventListener("click", function () {
    funcEventClick();
    if (!parentObj.getPowerStatus()){
      parentObj.powerOn();
      statePowerBtn.innerHTML = `<img src="./img/on64.png" >`;
    } else {
      parentObj.powerOff();
      statePowerBtn.innerHTML = `<img src="./img/off64.png" >`;
    }
  });
  statusDiv.appendChild(statePowerBtn);

  return statusDiv;
}

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

function UnitPrograms( parentObj, namePrograms) {
  function changeProgramFunc () {
    parentObj.setChannel(selChannel.options[selChannel.selectedIndex].index);
  }

  var divChannel = document.createElement("div");
  divChannel.className = "divChannel";
  divChannel.style.visibility = "hidden";

  var divName = document.createElement("div");
  divName.className = "divName";
  divName.innerHTML = namePrograms;
  divChannel.appendChild(divName);

  var selChannel = document.createElement("select");
  selChannel.setAttribute("size", "1");
  selChannel.className = "selChannel";

  for (var i = 0; i < parentObj.getListPrograms().length; i++){
    var option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerHTML = parentObj.getListPrograms()[i];
    selChannel.appendChild(option);
  }
  selChannel.onchange = changeProgramFunc;

  var btnNextCh = document.createElement("button");
  btnNextCh.type = "button";
  btnNextCh.className = "btnNextCh";
  btnNextCh.innerHTML = `<img src="./img/next.png" >`;
  btnNextCh.addEventListener("click", function () {
    if (selChannel.selectedIndex < selChannel.options.length-1){
      selChannel.options[selChannel.selectedIndex+1].selected = true;
      parentObj.channelNext();
      changeProgramFunc();
    }
  });

  var btnPrevCh = document.createElement("button");
  btnPrevCh.type = "button";
  btnPrevCh.className = "btnPrevCh";
  btnPrevCh.innerHTML = `<img src="./img/prev.png" >`;
  btnPrevCh.addEventListener("click", function () {
    if (selChannel.selectedIndex > 0) {
      selChannel.options[selChannel.selectedIndex-1].selected = true;
      parentObj.channelPrev();
      changeProgramFunc();
    }
  });

  divChannel.appendChild(btnPrevCh);
  divChannel.appendChild(selChannel);
  divChannel.appendChild(btnNextCh);

  return divChannel;
}

function UnitRemoveDevice(idDevice, nameDevice) {
  // Button remove illumination device
  var delDevice = document.createElement("div");
  delDevice.className = "delIllumDiv";
  var delDevBtn = document.createElement("a");
  delDevBtn.type = "a";
  delDevBtn.innerHTML = " УДАЛИТЬ УСТРОЙСТВО ";
  delDevBtn.className = "delElem";
  delDevBtn.addEventListener("click", function () {
    if (confirm(`Вы действительно хотите удалить - "${nameDevice}"`)) {
      var idRoom = ((idDevice - (idDevice % 100)) / 100);

      VIEW_HOUSE._house.removeDevice(idRoom, idDevice);
      var r =  document.getElementById(idDevice);
      r.parentNode.removeChild(r);
    }
  });
  delDevice.appendChild(delDevBtn);

  return delDevice;
}