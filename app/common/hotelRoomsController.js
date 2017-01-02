// hotelRoomsController.js
(function(){
	"use strict";

	var app = angular.module("bookingsAppModule");
	app.controller("hotelRoomsController", ["productResource",hotelRoomsController]);

	function hotelRoomsController(productResource){
		var vm =this;
	// 	vm.roomsList = [{
	// 	"totalAvailable" : 5,
	// 	"type": "Single",
	// 	"price":"150",
	// 	"info":"info about the room"
	// },
	// {
	// 	"totalAvailable" : 5,
	// 	"type": "Single",
	// 	"price":"150",
	// 	"info":"info about the room"
	// }];

		 productResource.query(function(data){
			vm.roomsList = data;
		});
	};

}());