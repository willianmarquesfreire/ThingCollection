define(function (require) {
    var angular = require('angular');
    require('app/modules/acessory/services/module');
    require('angular-ui-router');

    return angular
            .module('app.acessory.controllers', ['app.acessory.services','ui.router'])
            .controller('AcessoryFormController', require('app/modules/acessory/controllers/AcessoryFormController'))
            .controller('AcessoryListController', require('app/modules/acessory/controllers/AcessoryListController'));
});