define([], function() {


 	AcessoryFormController.$inject = ['AcessoryService', '$state', 'entity', '$scope', 'gumgaController', 'LocationService'];

 	function AcessoryFormController(AcessoryService, $state, entity, $scope, gumgaController, LocationService) {

    	gumgaController.createRestMethods($scope, AcessoryService, 'acessory');


	    gumgaController.createRestMethods($scope, LocationService, 'location');
	    $scope.location.methods.search('name','');    

    
    	$scope.acessory.data = entity.data || {};
		$scope.continue = {};
	
		$scope.acessory.on('putSuccess',function(data){
			$state.go('acessory.list');
		});
 	}
	
	return AcessoryFormController;   
});