
var myApp = angular.module('myApp', [ 'ui.router', 'oc.lazyLoad'  ] );
myApp.config([
	"$provide",
	"$compileProvider",
	"$controllerProvider",
	"$filterProvider",
	function($provide, $compileProvider, $controllerProvider,
			$filterProvider) {
		myApp.controller = $controllerProvider.register;
		myApp.directive = $compileProvider.directive;
		myApp.filter = $filterProvider.register;
		myApp.factory = $provide.factory;
		myApp.service = $provide.service;
		myApp.constant = $provide.constant;
	} ]);