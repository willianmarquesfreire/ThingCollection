define(function (require) {
    var angular = require('angular');
    require('app/modules/location/services/module');
    require('angular-ui-router');

    return angular
            .module('app.location.controllers', ['app.location.services','ui.router'])
            .controller('LocationFormController', require('app/modules/location/controllers/LocationFormController'))
            .controller('LocationListController', require('app/modules/location/controllers/LocationListController'));
});