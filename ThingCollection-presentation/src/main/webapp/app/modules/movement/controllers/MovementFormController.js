define([], function() {


 	MovementFormController.$inject = ['MovementService', '$state', 'entity', '$scope', 'gumgaController', 'ThingService'];

 	function MovementFormController(MovementService, $state, entity, $scope, gumgaController, ThingService) {

    	gumgaController.createRestMethods($scope, MovementService, 'movement');


	    gumgaController.createRestMethods($scope, ThingService, 'thing');
	    $scope.thing.methods.search('description','');    

    
    	$scope.movement.data = entity.data || {};
		$scope.movement.data.outputDate = ($scope.movement.data.outputDate == undefined || $scope.movement.data.outputDate == "") ? new Date() : new Date($scope.movement.data.outputDate);
        $scope.openoutputDate = function() {
        	$scope.openedOutputDate = !$scope.openedOutputDate;
        };

		$scope.continue = {};
	
		$scope.movement.on('putSuccess',function(data){
			$state.go('movement.list');
		});
 	}
	
	return MovementFormController;   
});