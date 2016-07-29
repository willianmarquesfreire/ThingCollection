define([], function() {

  BookListController.$inject = ['$scope', 'BookService', 'gumgaController'];

  function BookListController($scope, BookService, gumgaController) {

    gumgaController.createRestMethods($scope, BookService, 'book');

    BookService.resetDefaultState();
    $scope.book.execute('get');

    $scope.tableConfig = {
      columns: 'title ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'title',
        title: '<span gumga-translate-tag="book.title"> title </span>',
        content: '{{$value.title }}',
        sortField: 'title'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="book.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return BookListController;
});
