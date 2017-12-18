"use strict";

function ViewRoom( room, rootElement) {
  this._room = room;
  this._rootElement = rootElement;
}

ViewRoom.prototype.render = function () {
  var self = this;


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
  delRoomBtn.className = "delRoom";
  delRoomBtn.addEventListener("click", function () {
    if (confirm("Вы действительно хотите удалить комнату")) {
      viewHouse._house.removeRoom(self._room.getNameRoom());
      var r =  document.getElementById(self._room.getIdRoom());
      r.parentNode.removeChild(r);
    }
  });

  delRoomDiv.appendChild(delRoomBtn);
  cPanelRoom.appendChild(delRoomDiv);

  var illuminBtn = document.createElement("button");
  illuminBtn.innerHTML = `<img src="./img/lamp.png" >`;
  illuminBtn.className = "btn";
  illuminBtn.addEventListener("click", function () {
    var msg = prompt("Введите название освещения", "главное");
    if ((msg != "") && (msg != null)){
      var power = new Power();
      var load = new DeviceLoad(0, 10);
      var  illumDev = new Illumination(msg,power, load);
      var viewIllumDev = new ViewIllumination(illumDev, document.getElementById(self._room._id));

      viewIllumDev.render();

    }
  });

  cPanelRoom.appendChild(illuminBtn);

  room.appendChild(cPanelRoom);
  this._rootElement.appendChild(room);
};