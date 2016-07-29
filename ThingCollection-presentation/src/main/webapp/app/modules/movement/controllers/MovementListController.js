define([], function() {

  MovementListController.$inject = ['$scope', 'MovementService', 'gumgaController'];

  function MovementListController($scope, MovementService, gumgaController) {

    gumgaController.createRestMethods($scope, MovementService, 'movement');

    MovementService.resetDefaultState();
    $scope.movement.execute('get');

    $scope.tableConfig = {
      columns: 'outputDate ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'outputDate',
        title: '<span gumga-translate-tag="movement.outputDate"> outputDate </span>',
        content: '{{$value.outputDate }}',
        sortField: 'outputDate'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="movement.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return MovementListController;
});
