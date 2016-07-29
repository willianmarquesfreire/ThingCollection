define([], function() {

  LocationListController.$inject = ['$scope', 'LocationService', 'gumgaController'];

  function LocationListController($scope, LocationService, gumgaController) {

    gumgaController.createRestMethods($scope, LocationService, 'location');

    LocationService.resetDefaultState();
    $scope.location.execute('get');

    $scope.tableConfig = {
      columns: 'name ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'name',
        title: '<span gumga-translate-tag="location.name"> name </span>',
        content: '{{$value.name }}',
        sortField: 'name'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="location.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return LocationListController;
});
