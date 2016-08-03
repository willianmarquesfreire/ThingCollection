define([], function() {


 	AuthorFormController.$inject = ['AuthorService', '$state', 'entity', '$scope', 'gumgaController'];

 	function AuthorFormController(AuthorService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, AuthorService, 'author');



    
    	$scope.author.data = entity.data || {};
		$scope.author.data.dateBirth = ($scope.author.data.dateBirth == undefined || $scope.author.data.dateBirth == "") ? new Date() : new Date($scope.author.data.dateBirth);
        $scope.opendateBirth = function() {
        	$scope.openedDateBirth = !$scope.openedDateBirth;
        };

		$scope.author.data.contact = $scope.author.data.contact || [];
		$scope.author.data.address = $scope.author.data.address || [];
		$scope.continue = {};
	
		$scope.author.on('putSuccess',function(data){
			$state.go('author.list');
		});
 	}
	
	return AuthorFormController;   
});