define(function (require) {
    var angular = require('angular');
    require('app/modules/transport/services/module');
    require('angular-ui-router');

    return angular
            .module('app.transport.controllers', ['app.transport.services','ui.router'])
            .controller('TransportFormController', require('app/modules/transport/controllers/TransportFormController'))
            .controller('TransportListController', require('app/modules/transport/controllers/TransportListController'));
});