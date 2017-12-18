"use strict";

var house = new House();
var viewHouse = new ViewHouse( house, document.getElementById("root"));
viewHouse.render();

console.log(viewHouse);

var room = new Room("кухня", 0);
var viewRoom = new ViewRoom(room, document.getElementById("houseNew"));
house._listRoom.push(viewRoom);
viewRoom.render();

var room = new Room("комната 1", 1);
var viewRoom = new ViewRoom(room, document.getElementById("houseNew"));
house._listRoom.push(viewRoom);

viewRoom.render();
