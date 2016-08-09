define([], function () {


    BookFormController.$inject = ['BookService', '$state', 'entity', '$scope', 'gumgaController', 'PublishingHouseService', 'LocationService', 'SubjectService', 'AuthorService', '$http'];

    function BookFormController(BookService, $state, entity, $scope, gumgaController, PublishingHouseService, LocationService, SubjectService, AuthorService, $http) {

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
        console.log(entity.data)
        $http.get('http://localhost:8084/ThingCollection-api/api/book/1').then(function(response) {
                console.log(response)
            })
        $scope.book.data.publicationYear = ($scope.book.data.publicationYear == undefined || $scope.book.data.publicationYear == "") ? new Date() : new Date($scope.book.data.publicationYear);
        $scope.openpublicationYear = function () {
            $scope.openedPublicationYear = !$scope.openedPublicationYear;
        };

        $scope.continue = {};

        $scope.book.on('putSuccess', function (data) {
            $state.go('book.list');
        });
        
        
        $scope.salvar = function(data) {
            console.log(data)
            $http.post('http://localhost:8084/ThingCollection-api/api/book', data).then(function(response) {
                console.log(response)
            })
            ///api/book
//            book.methods.put(book.data)
        }
    }

    return BookFormController;
});