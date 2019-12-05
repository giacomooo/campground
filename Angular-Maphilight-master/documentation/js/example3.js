angular.module('app').controller('example3Controller', function controller($scope) {

	var sirJoshuaIsHighlighted = false;

	$scope.alwaysHighlightSirJoshua = function() {
		if(sirJoshuaIsHighlighted)  {
			$scope.sirJoshuaCustomStyle = null;
			sirJoshuaIsHighlighted = false;
		}
		else {
			sirJoshuaIsHighlighted = true;
			$scope.sirJoshuaCustomStyle =  {
				stroke:true,
				strokeColor: '000000',
				strokeWidth: 1,
				fillColor:'ffffff',
				fillOpacity:0.4,
				alwaysOn:true
			};
		}
	}
	$scope.highlightEdmundBurke = function(state){


		if(state)  {
			$scope.edmundBurkeCustomStyle =  {
				stroke:true,
				strokeColor: 'ff0000',
				strokeWidth: 1.5,
				fillColor:'000000',
				fillOpacity:0.2,
				alwaysOn:true
			};
		}
		else {
			$scope.edmundBurkeCustomStyle = null;
		}
	}
});