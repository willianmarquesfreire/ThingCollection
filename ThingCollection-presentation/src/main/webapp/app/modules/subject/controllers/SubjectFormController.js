define([], function() {


 	SubjectFormController.$inject = ['SubjectService', '$state', 'entity', '$scope', 'gumgaController'];

 	function SubjectFormController(SubjectService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, SubjectService, 'subject');



    
    	$scope.subject.data = entity.data || {};
		$scope.continue = {};
	
		$scope.subject.on('putSuccess',function(data){
			$state.go('subject.list');
		});
 	}
	
	return SubjectFormController;   
});