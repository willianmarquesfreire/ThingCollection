define([], function() {

  ThingListController.$inject = ['$scope', 'ThingService', 'gumgaController'];

  function ThingListController($scope, ThingService, gumgaController) {

    gumgaController.createRestMethods($scope, ThingService, 'thing');

    ThingService.resetDefaultState();
    $scope.thing.execute('get');

    $scope.tableConfig = {
      columns: 'description ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'description',
        title: '<span gumga-translate-tag="thing.description"> description </span>',
        content: '{{$value.description }}',
        sortField: 'description'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="thing.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ThingListController;
});
