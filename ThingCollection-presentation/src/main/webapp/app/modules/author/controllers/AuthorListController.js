define([], function() {

  AuthorListController.$inject = ['$scope', 'AuthorService', 'gumgaController'];

  function AuthorListController($scope, AuthorService, gumgaController) {

    gumgaController.createRestMethods($scope, AuthorService, 'author');

    AuthorService.resetDefaultState();
    $scope.author.execute('get');

    $scope.tableConfig = {
      columns: 'name ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'name',
        title: '<span gumga-translate-tag="author.name"> name </span>',
        content: '{{$value.name }}',
        sortField: 'name'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="author.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return AuthorListController;
});
