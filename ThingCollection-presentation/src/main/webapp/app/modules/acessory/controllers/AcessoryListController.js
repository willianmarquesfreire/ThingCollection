define([], function() {

  AcessoryListController.$inject = ['$scope', 'AcessoryService', 'gumgaController'];

  function AcessoryListController($scope, AcessoryService, gumgaController) {

    gumgaController.createRestMethods($scope, AcessoryService, 'acessory');

    AcessoryService.resetDefaultState();
    $scope.acessory.execute('get');

    $scope.tableConfig = {
      columns: 'description ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'description',
        title: '<span gumga-translate-tag="acessory.description"> description </span>',
        content: '{{$value.description }}',
        sortField: 'description'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="acessory.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return AcessoryListController;
});
