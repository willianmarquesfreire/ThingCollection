define([], function() {

  PeopleListController.$inject = ['$scope', 'PeopleService', 'gumgaController'];

  function PeopleListController($scope, PeopleService, gumgaController) {

    gumgaController.createRestMethods($scope, PeopleService, 'people');

    PeopleService.resetDefaultState();
    $scope.people.execute('get');

    $scope.tableConfig = {
      columns: 'name ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'name',
        title: '<span gumga-translate-tag="people.name"> name </span>',
        content: '{{$value.name }}',
        sortField: 'name'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="people.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return PeopleListController;
});
