define([], function() {

  ReservationListController.$inject = ['$scope', 'ReservationService', 'gumgaController'];

  function ReservationListController($scope, ReservationService, gumgaController) {

    gumgaController.createRestMethods($scope, ReservationService, 'reservation');

    ReservationService.resetDefaultState();
    $scope.reservation.execute('get');

    $scope.tableConfig = {
      columns: 'outputDate ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'outputDate',
        title: '<span gumga-translate-tag="reservation.outputDate"> outputDate </span>',
        content: '{{$value.outputDate }}',
        sortField: 'outputDate'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="reservation.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ReservationListController;
});
