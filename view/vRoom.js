"use strict";

function ViewRoom( room, rootId) {
  this._room = room;
  this._rootId = rootId;
}

ViewRoom.prototype.render = function () {
  var self = this;
  //  idUnitDevice var for unit device in room
  var idUnitDevice = this._room.getIdRoom() * 100;

  // _indexDevNext var for index next device;
  if (idUnitDevice == 100) {
    var _indexDevNext = 4;
  } else {
    var _indexDevNext = 1;
  }

  var room = document.createElement("div");
  room.className = "room";
  room.setAttribute("id", this._room.getIdRoom());


  var cPanelRoom = document.createElement("div");
  cPanelRoom.className = "cPanelRoom";


  var nameR = document.createElement("p");
  nameR.setAttribute("id", "nrp");
  nameR.innerHTML = this._room.getNameRoom();
  var nameDiv = document.createElement("div");
  nameDiv.setAttribute("id", "nrd");
  nameDiv.appendChild(nameR);
  cPanelRoom.appendChild(nameDiv);

  var unitDevice = document.createElement("div");
  unitDevice.className = "unitDevice";
  unitDevice.setAttribute("id", idUnitDevice);

  // Button add illumination
  var illuminBtn = document.createElement("button");
  illuminBtn.innerHTML = `<img src="./img/lamp.png" >`;
  illuminBtn.className = "btn";
  illuminBtn.addEventListener("click", function () {
    var msg = prompt("Введите название освещения", "главное");
    if ((msg != "") && (msg != null)){
      var load = new DeviceLoad(0, 100);
      var idDevise = idUnitDevice + _indexDevNext++;
      var  illumDev = new Illumination(msg, load);
      var viewIllumDev = new ViewIllumination(illumDev, idDevise, idUnitDevice);
      self._room.addDevice(viewIllumDev);
      viewIllumDev.render();
    }
  });
  cPanelRoom.appendChild(illuminBtn);

  //Button add TV
  var tvBtn = document.createElement("button");
  tvBtn.innerHTML = `<img src="./img/tv48.png" >`;
  tvBtn.className = "btn";
  tvBtn.addEventListener("click", function () {
    var msg = prompt("Введите название TV", "СОНЯ");
    if ((msg != "") && (msg != null)){
      var programs = new Programs(tvProgramsList);
      var volume = new Volume(100);
      var idDevise = idUnitDevice + _indexDevNext++;
      var tvDev = new Tv(msg, programs, volume);
      var viewTvDev = new ViewTv(tvDev, idDevise, idUnitDevice);
      self._room.addDevice(viewTvDev);
      viewTvDev.render();
    }
  });
  cPanelRoom.appendChild(tvBtn);

  //Button add Radio
  var mp3Btn = document.createElement("button");
  mp3Btn.innerHTML = `<img src="./img/radio48.png" >`;
  mp3Btn.className = "btn";
  mp3Btn.addEventListener("click", function () {
    var msg = prompt("Введите название радио", "МОЁ радио");
    if ((msg != "") && (msg != null)){
      var programs = new Programs(fmStation);
      var volume = new Volume(100);
      var idDevise = idUnitDevice + _indexDevNext++;
      var radioDev = new Radio(msg, programs, volume);
      var viewRadioDev = new ViewRadio(radioDev, idDevise, idUnitDevice);
      self._room.addDevice(viewRadioDev);
      viewRadioDev.render();
    }
  });
  cPanelRoom.appendChild(mp3Btn);

  //button remove room
  var delRoomDiv = document.createElement("div");
  delRoomDiv.className = "delRoomDiv";

  var delRoomBtn = document.createElement("a");
  delRoomBtn.type = "a";
  delRoomBtn.innerHTML = " УДАЛИТЬ КОМНАТУ ";
  delRoomBtn.className = "delElem";
  delRoomBtn.addEventListener("click", function () {
    if (confirm("Вы действительно хотите удалить комнату")) {
      VIEW_HOUSE._house.removeRoom(self._room.getNameRoom());
      var r =  document.getElementById(self._room.getIdRoom());
      r.parentNode.removeChild(r);
    }
  });

  delRoomDiv.appendChild(delRoomBtn);
  cPanelRoom.appendChild(delRoomDiv);

  room.appendChild(cPanelRoom);
  room.appendChild(unitDevice);
  document.getElementById(this._rootId).appendChild(room);
};