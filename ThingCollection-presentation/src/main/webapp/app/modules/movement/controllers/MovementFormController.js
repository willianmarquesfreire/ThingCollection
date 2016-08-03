define([], function() {


 	MovementFormController.$inject = ['MovementService', '$state', 'entity', '$scope', 'gumgaController'];

 	function MovementFormController(MovementService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, MovementService, 'movement');



    
    	$scope.movement.data = entity.data || {};
		$scope.movement.data.outputDate = ($scope.movement.data.outputDate == undefined || $scope.movement.data.outputDate == "") ? new Date() : new Date($scope.movement.data.outputDate);
        $scope.openoutputDate = function() {
        	$scope.openedOutputDate = !$scope.openedOutputDate;
        };

		$scope.movement.data.thing = $scope.movement.data.thing || [];
		$scope.continue = {};
	
		$scope.movement.on('putSuccess',function(data){
			$state.go('movement.list');
		});
 	}
	
	return MovementFormController;   
});