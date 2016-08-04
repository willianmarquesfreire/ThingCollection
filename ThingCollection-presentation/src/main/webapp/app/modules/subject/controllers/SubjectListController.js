define([], function() {

  SubjectListController.$inject = ['$scope', 'SubjectService', 'gumgaController'];

  function SubjectListController($scope, SubjectService, gumgaController) {

    gumgaController.createRestMethods($scope, SubjectService, 'subject');

    SubjectService.resetDefaultState();
    $scope.subject.execute('get');

    $scope.tableConfig = {
      columns: 'description ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'description',
        title: '<span gumga-translate-tag="subject.description"> description </span>',
        content: '{{$value.description }}',
        sortField: 'description'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="subject.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return SubjectListController;
});
