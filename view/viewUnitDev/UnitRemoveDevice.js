"use strict";
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