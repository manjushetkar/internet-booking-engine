// bookings.js
(function(){

	"use strict";
	var app = angular.module('bookingsAppModule');

	app.config(function($stateProvider){
		// $routeProvider
		// .when('/dates',
		// {
		// 	templateUrl : "templates/dates1.html",
		// 	controller  : "datesController as vm"
		// })
		// .when('/rooms',
		// {
		// 	templateUrl : "templates/hotelRooms.html",
		// 	controller  : "hotelRoomsController as vm",
		// 	//resolve     : hotelRoomsController.resolve
		// })

		var homeState = {
			name		: "home",
			templateUrl : "templates/dates1.html",
			controller  : "datesController as vm"
		};

		var roomsState = {
			name		: "rooms",
			templateUrl : "templates/hotelRooms.html",
			controller  : "datesController as vm"
		};

		var detailsState = {
			name		: "details",
			template  	: "<p> Page under constn </p>",
			//controller  : "detailsController as vm"
		};

		var reviewState = {
			name		: "review",
			template 	: "<p> Page under constn </p>",
			//controller 	: "reviewController as vm"
		};

		var doneState = {
			name		: "done",
			template  	: "<p> Page under constn </p>",
			//controller 	: "doneController as vm"
		};

		$stateProvider.state(homeState);
		$stateProvider.state(roomsState);
		$stateProvider.state(detailsState);
		$stateProvider.state(reviewState);
		$stateProvider.state(doneState);
	});
}());

