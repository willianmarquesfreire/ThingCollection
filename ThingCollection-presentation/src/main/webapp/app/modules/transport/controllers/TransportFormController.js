define([], function() {


 	TransportFormController.$inject = ['TransportService', '$state', 'entity', '$scope', 'gumgaController'];

 	function TransportFormController(TransportService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, TransportService, 'transport');



    
    	$scope.transport.data = entity.data || {};
		$scope.transport.data.outputDate = ($scope.transport.data.outputDate == undefined || $scope.transport.data.outputDate == "") ? new Date() : new Date($scope.transport.data.outputDate);
        $scope.openoutputDate = function() {
        	$scope.openedOutputDate = !$scope.openedOutputDate;
        };

		$scope.continue = {};
	
		$scope.transport.on('putSuccess',function(data){
			$state.go('transport.list');
		});
 	}
	
	return TransportFormController;   
});