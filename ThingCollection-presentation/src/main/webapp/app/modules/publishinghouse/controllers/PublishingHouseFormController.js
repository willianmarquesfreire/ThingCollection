define([], function() {


 	PublishingHouseFormController.$inject = ['PublishingHouseService', '$state', 'entity', '$scope', 'gumgaController'];

 	function PublishingHouseFormController(PublishingHouseService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, PublishingHouseService, 'publishinghouse');



    
    	$scope.publishinghouse.data = entity.data || {};
		$scope.continue = {};
	
		$scope.publishinghouse.on('putSuccess',function(data){
			$state.go('publishinghouse.list');
		});
 	}
	
	return PublishingHouseFormController;   
});