// productResource.js
(function(){

	"use strict";
	var app = angular.module("common.services");
	app.factory("productResource", ["$resource", function($resource){
		return $resource("/api/products");
	}]);

	var productResource = function($resource){
		return $resource("/api/products");
	};
}());
