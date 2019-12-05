angular.module('app').controller('example2Controller', function controller($scope) {

	$scope.config = {
		
		fade: true,
		alwaysOn: true,
		neverOn: false,

		// fill
		fill: true,
		fillColor: '#ffffff',
		fillOpacity: 0.4,

		// stroke
		stroke: true,
		strokeColor: '#4d0ec0',
		strokeOpacity: 1,
		strokeWidth: 1,

        // shadow:
        shadow: true,
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 10
    }

});