define([], function() {


 	BookFormController.$inject = ['BookService', '$state', 'entity', '$scope', 'gumgaController'];

 	function BookFormController(BookService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, BookService, 'book');



    
    	$scope.book.data = entity.data || {};
		$scope.book.data.publicationYear = ($scope.book.data.publicationYear == undefined || $scope.book.data.publicationYear == "") ? new Date() : new Date($scope.book.data.publicationYear);
        $scope.openpublicationYear = function() {
        	$scope.openedPublicationYear = !$scope.openedPublicationYear;
        };

		$scope.continue = {};
	
		$scope.book.on('putSuccess',function(data){
			$state.go('book.list');
		});
 	}
	
	return BookFormController;   
});