define([], function() {


 	ContactFormController.$inject = ['ContactService', '$state', 'entity', '$scope', 'gumgaController'];

 	function ContactFormController(ContactService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, ContactService, 'contact');



    
    	$scope.contact.data = entity.data || {};
		$scope.continue = {};
	
		$scope.contact.on('putSuccess',function(data){
			$state.go('contact.list');
		});
 	}
	
	return ContactFormController;   
});