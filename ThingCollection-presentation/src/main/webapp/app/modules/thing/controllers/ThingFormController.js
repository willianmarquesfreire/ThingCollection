define([], function() {


 	ThingFormController.$inject = ['ThingService', '$state', 'entity', '$scope', 'gumgaController', 'LocationService'];

 	function ThingFormController(ThingService, $state, entity, $scope, gumgaController, LocationService) {

    	gumgaController.createRestMethods($scope, ThingService, 'thing');


	    gumgaController.createRestMethods($scope, LocationService, 'location');
	    $scope.location.methods.search('name','');    

    
    	$scope.thing.data = entity.data || {};
		$scope.continue = {};
	
		$scope.thing.on('putSuccess',function(data){
			$state.go('thing.list');
		});
 	}
	
	return ThingFormController;   
});