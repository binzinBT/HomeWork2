"use strict";

function ViewRoom( room, rootElement) {
  this._room = room;
  this._rootElement = rootElement;
}

ViewRoom.prototype.render = function () {
  var self = this;
  var _indexDevNext = 2;
  var idUnitDevice = self._room._id * 100;

  var room = document.createElement("div");
  room.className = "room";
  room.setAttribute("id", this._room._id);


  var cPanelRoom = document.createElement("div");
  cPanelRoom.className = "cPanelRoom";


  var nameR = document.createElement("p");
  nameR.setAttribute("id", "nrp");
  nameR.innerHTML = this._room.getNameRoom();
  var nameDiv = document.createElement("div");
  nameDiv.setAttribute("id", "nrd");
  nameDiv.appendChild(nameR);
  cPanelRoom.appendChild(nameDiv);


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

  var unitDevice = document.createElement("div");
  unitDevice.className = "unitDevice";
  unitDevice.setAttribute("id", idUnitDevice);

  // Button create illumination
  var illuminBtn = document.createElement("button");
  illuminBtn.innerHTML = `<img src="./img/lamp.png" >`;
  illuminBtn.className = "btn";
  illuminBtn.addEventListener("click", function () {
    var msg = prompt("Введите название освещения", "главное");
    if ((msg != "") && (msg != null)){
      var power = new Power();
      var load = new DeviceLoad(0, 100);
      var idDevise = idUnitDevice + _indexDevNext++;
      var  illumDev = new Illumination(msg, power, load);
      var viewIllumDev = new ViewIllumination(illumDev, idDevise, unitDevice);
      self._room.addDevice(viewIllumDev);
      viewIllumDev.render();
    }
  });
  cPanelRoom.appendChild(illuminBtn);

  //Button TV
  var tvBtn = document.createElement("button");
  tvBtn.innerHTML = `<img src="./img/tv48.png" >`;
  tvBtn.className = "btn";
  tvBtn.addEventListener("click", function () {
    var msg = prompt("Введите название TV", "СОНЯ");
    if ((msg != "") && (msg != null)){
      var power = new Power();
      var programs = new Programs(tvProgramsList);
      var volume = new Volume(100);
      var idDevise = idUnitDevice + _indexDevNext++;
      var tvDev = new Tv(msg, power, programs, volume);
      var viewTvDev = new ViewTv(tvDev, idDevise, unitDevice);
      self._room.addDevice(viewTvDev);
      viewTvDev.render();
    }
  });
  cPanelRoom.appendChild(tvBtn);

  //Button TV
  var mp3Btn = document.createElement("button");
  mp3Btn.innerHTML = `<img src="./img/radio48.png" >`;
  mp3Btn.className = "btn";
  mp3Btn.addEventListener("click", function () {
    var msg = prompt("Введите название TV", "СОНЯ");
    if ((msg != "") && (msg != null)){
      var power = new Power();
      var load = new DeviceLoad(0, 100);
      var idDevise = idUnitDevice + _indexDevNext++;
      var  illumDev = new Illumination(msg, power, load);
      var viewIllumDev = new ViewIllumination(illumDev, idDevise, unitDevice);
      self._room.addDevice(viewIllumDev);
      viewIllumDev.render();
    }
  });
  cPanelRoom.appendChild(mp3Btn);

  room.appendChild(cPanelRoom);
  room.appendChild(unitDevice);
  this._rootElement.appendChild(room);
};