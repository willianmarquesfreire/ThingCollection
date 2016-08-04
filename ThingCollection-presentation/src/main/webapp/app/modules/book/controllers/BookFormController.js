define([], function () {


	BookFormController.$inject = ['BookService', '$state', 'entity', '$scope', 'gumgaController', 'PublishingHouseService', 'LocationService', 'SubjectService', 'AuthorService'];

	function BookFormController(BookService, $state, entity, $scope, gumgaController, PublishingHouseService, LocationService, SubjectService, AuthorService) {

		gumgaController.createRestMethods($scope, BookService, 'book');

		gumgaController.createRestMethods($scope, PublishingHouseService, 'publishinghouse');
		$scope.publishinghouse.methods.search('name', '');
		gumgaController.createRestMethods($scope, LocationService, 'location');
		$scope.location.methods.search('name', '');
		gumgaController.createRestMethods($scope, SubjectService, 'subject');
		$scope.subject.methods.search('description', '');
		gumgaController.createRestMethods($scope, AuthorService, 'author');
		$scope.author.methods.search('name', '');

		$scope.authorOptions = [];
		$scope.subjectsOptions = [];

		$scope.book.data = entity.data || {};
		$scope.book.data.publicationYear = ($scope.book.data.publicationYear == undefined || $scope.book.data.publicationYear == "") ? new Date() : new Date($scope.book.data.publicationYear);
        $scope.openpublicationYear = function () {
			$scope.openedPublicationYear = !$scope.openedPublicationYear;
        };

		$scope.continue = {};

		$scope.book.on('putSuccess', function (data) {
			$state.go('book.list');
		});
	}

	return BookFormController;
});