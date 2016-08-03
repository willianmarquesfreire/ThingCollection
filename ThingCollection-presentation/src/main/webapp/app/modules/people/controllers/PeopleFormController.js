define([], function() {


 	PeopleFormController.$inject = ['PeopleService', '$state', 'entity', '$scope', 'gumgaController'];

 	function PeopleFormController(PeopleService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, PeopleService, 'people');



    
    	$scope.people.data = entity.data || {};
		$scope.people.data.dateBirth = ($scope.people.data.dateBirth == undefined || $scope.people.data.dateBirth == "") ? new Date() : new Date($scope.people.data.dateBirth);
        $scope.opendateBirth = function() {
        	$scope.openedDateBirth = !$scope.openedDateBirth;
        };

		$scope.people.data.contact = $scope.people.data.contact || [];
		$scope.people.data.address = $scope.people.data.address || [];
		$scope.continue = {};
	
		$scope.people.on('putSuccess',function(data){
			$state.go('people.list');
		});
 	}
	
	return PeopleFormController;   
});