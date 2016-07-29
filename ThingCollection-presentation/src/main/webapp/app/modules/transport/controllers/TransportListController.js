define([], function() {

  TransportListController.$inject = ['$scope', 'TransportService', 'gumgaController'];

  function TransportListController($scope, TransportService, gumgaController) {

    gumgaController.createRestMethods($scope, TransportService, 'transport');

    TransportService.resetDefaultState();
    $scope.transport.execute('get');

    $scope.tableConfig = {
      columns: 'outputDate ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'outputDate',
        title: '<span gumga-translate-tag="transport.outputDate"> outputDate </span>',
        content: '{{$value.outputDate }}',
        sortField: 'outputDate'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="transport.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return TransportListController;
});
