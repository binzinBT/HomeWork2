"use strict";
function  ViewHouse (house, rootElement) {
  this._house = house;
  this._rootElement = rootElement;
  //this._state = document.createElement("div");
}

ViewHouse.prototype.render = function () {
  var self = this;
  var house = document.createElement("div");
  house.className = "house";
  house.setAttribute("id", "houseNew");

  var cPanel = document.createElement("div");
  cPanel.className = "cPanel";
  
  var npv = document.createElement("p");
  npv.setAttribute("id", "npv");
  npv.innerHTML = "SMART HOUSE v 0.1";

  var addBtn = document.createElement("a");
  addBtn.type = "a";
  addBtn.innerHTML = "+ КОМНАТА";
  addBtn.className = "addRoom";
  addBtn.addEventListener("click", function () {
    var addR = prompt("Введите название комнаты", "Например гостинная");
    if ((addR !="") && (addR != null)) {
      var addNewRoom = new Room( addR, self._house._listRoom.length );
      var addNewViewRoom = new ViewRoom(addNewRoom, document.getElementById("houseNew"));
      addNewViewRoom.render();
      self._house.addRoom(addNewViewRoom);
    }


  });

  cPanel.appendChild(addBtn);
  cPanel.appendChild(npv);
  house.appendChild(cPanel);
  this._rootElement.appendChild(house);
};
