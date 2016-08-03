define([], function() {

  BookListController.$inject = ['$scope', 'BookService', 'gumgaController'];

  function BookListController($scope, BookService, gumgaController) {

    gumgaController.createRestMethods($scope, BookService, 'book');

    BookService.resetDefaultState();
    $scope.book.execute('get');

    $scope.tableConfig = {
      columns: 'description ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'description',
        title: '<span gumga-translate-tag="book.description"> description </span>',
        content: '{{$value.description }}',
        sortField: 'description'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="book.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return BookListController;
});
