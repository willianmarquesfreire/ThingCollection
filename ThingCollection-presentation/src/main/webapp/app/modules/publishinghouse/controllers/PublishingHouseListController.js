define([], function() {

  PublishingHouseListController.$inject = ['$scope', 'PublishingHouseService', 'gumgaController'];

  function PublishingHouseListController($scope, PublishingHouseService, gumgaController) {

    gumgaController.createRestMethods($scope, PublishingHouseService, 'publishinghouse');

    PublishingHouseService.resetDefaultState();
    $scope.publishinghouse.execute('get');

    $scope.tableConfig = {
      columns: 'name ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'name',
        title: '<span gumga-translate-tag="publishinghouse.name"> name </span>',
        content: '{{$value.name }}',
        sortField: 'name'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="publishinghouse.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return PublishingHouseListController;
});
