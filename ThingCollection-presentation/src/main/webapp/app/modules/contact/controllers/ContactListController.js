define([], function() {

  ContactListController.$inject = ['$scope', 'ContactService', 'gumgaController'];

  function ContactListController($scope, ContactService, gumgaController) {

    gumgaController.createRestMethods($scope, ContactService, 'contact');

    ContactService.resetDefaultState();
    $scope.contact.execute('get');

    $scope.tableConfig = {
      columns: 'description ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'description',
        title: '<span gumga-translate-tag="contact.description"> description </span>',
        content: '{{$value.description }}',
        sortField: 'description'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="contact.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ContactListController;
});
