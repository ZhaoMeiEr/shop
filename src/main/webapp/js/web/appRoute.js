"use strict"
	//var myApp = angular.module('myApp', [ 'ui.router', 'oc.lazyLoad'  ] );
	myApp.config(function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
		$stateProvider.state('success',{
			url : '/success',
			templateUrl : 'jsp/success.jsp',
			/*controller : 'successController',
			resolve : {
				deps : ["$ocLazyLoad",function($ocLazyLoad){
					return $ocLazyLoad.load(["js/web/successController.js"]);
				}]
			}*/
		});
	});
