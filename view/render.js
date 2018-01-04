"use strict";

var house = new House();
var VIEW_HOUSE = new ViewHouse( house, "root");
VIEW_HOUSE.render();

//first room
var room = new Room("кухня", 1);
var viewRoom = new ViewRoom(room, "houseNew" );
house._listRoom.push(viewRoom);
viewRoom.render();

// first device in the first room
var idDevise = 101;
var load = new DeviceLoad(0, 100);
var  illumDev = new Illumination("000", load);
var viewIllumDev = new ViewIllumination(illumDev, idDevise,100);
viewRoom._room.addDevice(viewIllumDev);
viewIllumDev.render();

// second device in the first room
var idDevise = 102;
var programs = new Programs(tvProgramsList);
var volume = new Volume(100);
var tvDev = new Tv("Соня", programs, volume);
var viewTvDev = new ViewTv(tvDev, idDevise, 100);
viewRoom._room.addDevice(viewTvDev);
viewTvDev.render();

//  third dev in the firs room
var idDevise = 103;
var programs = new Programs(fmStation);
var volume = new Volume(100);
var radioDev = new Radio("моё", programs, volume);
var viewRadioDev = new ViewRadio(radioDev, idDevise, 100);
viewRoom._room.addDevice(viewRadioDev);
viewRadioDev.render();

//second room
var room = new Room("спальня", 2);
var viewRoom = new ViewRoom(room, "houseNew" );
house._listRoom.push(viewRoom);
viewRoom.render();

console.log(VIEW_HOUSE);