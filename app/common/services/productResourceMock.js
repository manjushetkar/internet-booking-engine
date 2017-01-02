// productResourceMock.js
(function(){
	"use strict";
	var app = angular.module("productResourceMock", ["ngMockE2E"]);
	app.run(function($httpBackend){

		var hotelRooms = [{
				"totalAvailable" : 5,
				"type": "Single",
				"price":"150",
				"info":"info about the room"
			},
			{
				"totalAvailable" : 5,
				"type": "Single",
				"price":"150",
				"info":"info about the room"
			}];

		var productUrl = "/api/products";



		$httpBackend.whenGET("templates/dates1.html").passThrough();
		$httpBackend.whenGET("templates/hotelRooms.html").passThrough();
		//	$httpBackend.whenGET("index.html").passThrough();
		$httpBackend.whenGET(productUrl).respond(hotelRooms);

	});

	// var productResourceMock = funtion($httpBackend){
	// 	var hotelRooms = [{
	// 			"totalAvailable" : 5,
	// 			"type": "Single",
	// 			"price":"150",
	// 			"info":"info about the room"
	// 		},
	// 		{
	// 			"totalAvailable" : 5,
	// 			"type": "Single",
	// 			"price":"150",
	// 			"info":"info about the room"
	// 		}];



	// };

	
}());