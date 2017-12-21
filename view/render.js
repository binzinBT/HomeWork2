"use strict";
var _lastIndexRoom = 0;
var _lastIndexDevise = 0;

var house = new House();
var VIEW_HOUSE = new ViewHouse( house, document.getElementById("root"));
VIEW_HOUSE.render();

console.log(VIEW_HOUSE);

var room = new Room("кухня", 1);
var viewRoom = new ViewRoom(room, document.getElementById("houseNew"));
house._listRoom.push(viewRoom);
viewRoom.render();

var power = new Power();
var load = new DeviceLoad(0, 100);
var idDevise = 101;
var  illumDev = new Illumination("000", power, load);
var viewIllumDev = new ViewIllumination(illumDev, idDevise, document.getElementById("100"));
viewRoom._room.addDevice(viewIllumDev);
viewIllumDev.render();

var room = new Room("комната 1", 2);
var viewRoom = new ViewRoom(room, document.getElementById("houseNew"));
house._listRoom.push(viewRoom);
viewRoom.render();





//unitDevice.appendChild(unitDevice);
