define([], function() {


 	ReservationFormController.$inject = ['ReservationService', '$state', 'entity', '$scope', 'gumgaController', 'ThingService'];

 	function ReservationFormController(ReservationService, $state, entity, $scope, gumgaController, ThingService) {

    	gumgaController.createRestMethods($scope, ReservationService, 'reservation');


	    gumgaController.createRestMethods($scope, ThingService, 'thing');
	    $scope.thing.methods.search('description','');    

    
    	$scope.reservation.data = entity.data || {};
		$scope.reservation.data.outputDate = ($scope.reservation.data.outputDate == undefined || $scope.reservation.data.outputDate == "") ? new Date() : new Date($scope.reservation.data.outputDate);
        $scope.openoutputDate = function() {
        	$scope.openedOutputDate = !$scope.openedOutputDate;
        };

		$scope.reservation.data.expirationDate = ($scope.reservation.data.expirationDate == undefined || $scope.reservation.data.expirationDate == "") ? new Date() : new Date($scope.reservation.data.expirationDate);
        $scope.openexpirationDate = function() {
        	$scope.openedExpirationDate = !$scope.openedExpirationDate;
        };

		$scope.continue = {};
	
		$scope.reservation.on('putSuccess',function(data){
			$state.go('reservation.list');
		});
 	}
	
	return ReservationFormController;   
});