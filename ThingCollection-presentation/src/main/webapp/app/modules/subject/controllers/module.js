define(function (require) {
    var angular = require('angular');
    require('app/modules/subject/services/module');
    require('angular-ui-router');

    return angular
            .module('app.subject.controllers', ['app.subject.services','ui.router'])
            .controller('SubjectFormController', require('app/modules/subject/controllers/SubjectFormController'))
            .controller('SubjectListController', require('app/modules/subject/controllers/SubjectListController'));
});