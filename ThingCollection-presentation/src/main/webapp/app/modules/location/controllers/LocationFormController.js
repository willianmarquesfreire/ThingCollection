define([], function() {


 	LocationFormController.$inject = ['LocationService', '$state', 'entity', '$scope', 'gumgaController'];

 	function LocationFormController(LocationService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, LocationService, 'location');



    
    	$scope.location.data = entity.data || {};
		$scope.continue = {};
	
		$scope.location.on('putSuccess',function(data){
			$state.go('location.list');
		});
 	}
	
	return LocationFormController;   
});