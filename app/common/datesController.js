// datesController.js
(function(){
	"use strict";
	var app = angular.module('bookingsAppModule');

	app.controller("datesController", ["productResource","$state",datesController]);

	function datesController(productResource, $state) {
		var vm = this;
		var cur = new Date();
		var d = cur.getDate();
		var m = cur.getMonth();
		var y = cur.getFullYear();
		vm.minDate = new Date(y,m,d);
		vm.checkInDate = vm.minDate;
		vm.checkOutDate= vm.minDate;

		productResource.query(function(data){
		vm.roomsList = data;
		});

		vm.onShowRooms= function(){
			$state.go("rooms");
		};

		
		vm.changeDatesClick = function(){
			$state.go("home");
		};

		vm.onBookRoomsClick	= function(){
			$state.go("details");
		};

	}


}());