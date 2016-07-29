define([], function() {


 	AddressFormController.$inject = ['AddressService', '$state', 'entity', '$scope', 'gumgaController'];

 	function AddressFormController(AddressService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, AddressService, 'address');



    
    	$scope.address.data = entity.data || {};
		$scope.continue = {};
	
		$scope.address.on('putSuccess',function(data){
			$state.go('address.list');
		});
 	}
	
	return AddressFormController;   
});