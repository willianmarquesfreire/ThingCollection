define([], function() {

  AddressListController.$inject = ['$scope', 'AddressService', 'gumgaController'];

  function AddressListController($scope, AddressService, gumgaController) {

    gumgaController.createRestMethods($scope, AddressService, 'address');

    AddressService.resetDefaultState();
    $scope.address.execute('get');

    $scope.tableConfig = {
      columns: 'description ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'description',
        title: '<span gumga-translate-tag="address.description"> description </span>',
        content: '{{$value.description }}',
        sortField: 'description'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="address.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return AddressListController;
});
