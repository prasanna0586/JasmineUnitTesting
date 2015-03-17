'use strict';
describe("RDNG List Controller" , function () {
	var controller, rootScope, scope, rdngLibraryModelService, rdngConst;
	beforeEach(function() {
		module('rfng.rdng.library');
		module(function ($provide) {
			rdngLibraryModelService = $provide.service("rdngLibraryModelService", function ($q, $timeout) {
				this.getField = function (fieldObj) {
					console.log('Inside mock getField service');
					var deferred = $q.defer();
					var response = {};
					response.data = {"code":"ABCD",
							"brand":"DEFAULT",
							"description":"This is a sample description for Unit Test",
							"type":"IMAGE",
							"createdDtm":1425060515769,
							"default":{"type":"REF","value":"DEFAULT_ABCD_IMAGE"}
					};
					deferred.resolve(scope.editFieldSuccessHandler(response));
					return deferred.promise;
				};
			});
		});
	});
	//This is the starting point of test case
	beforeEach(inject(function($controller, $rootScope, rdngConst) {
		console.log('Scope is created here');
		scope = $rootScope.$new();
		rdngConst = rdngConst;
		rootScope = $rootScope;
		controller = $controller('RdngListController' , {
			$scope: scope,
			$rootScope: rootScope
		});
	}));

	describe("Edit Fields", function () {
		var fieldObj = {};
		beforeEach(function () {
			fieldObj.isOnlyDefaultBrandFieldsExists = true;
			scope.authFieldLibrary = {}
			scope.authFieldLibrary.canAddOrEditField = true;
		});
		it ("Edit Field Window", function() {
			console.log('Inside editFieldWindow in unit test file');
			scope.editFieldWindow(fieldObj);
		});
	});
});