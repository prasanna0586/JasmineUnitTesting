'use strict';
describe('List Directive', function () {
	var rootScope, scope, compile, templateUrl, element, attrs = {};
	beforeEach(function () {
		module('rfng.rdng.library');
	});
	beforeEach(function () {
		module('html-templates');
	});
	beforeEach(inject(function (_$compile_, _$rootScope_,_$templateCache_) {
		compile = _$compile_;
		rootScope = _$rootScope_;
		scope = rootScope.$new();
		templateUrl = _$templateCache_;
		
	}));
	
	it('Unit Test Case for rdngLoadImage', function () {
		element = angular.element("<rdng-load-image title = '\"This is a sample title\"'></rdng-load-image>");
		console.log('element');
		console.log(element);
		compile(element)(scope);
		scope.$digest();
		templateUrl.get("views/rdng/library/listimgfields.html");
	});
});