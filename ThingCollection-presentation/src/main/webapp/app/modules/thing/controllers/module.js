define(function (require) {
    var angular = require('angular');
    require('app/modules/thing/services/module');
    require('angular-ui-router');

    return angular
            .module('app.thing.controllers', ['app.thing.services','ui.router'])
            .controller('ThingFormController', require('app/modules/thing/controllers/ThingFormController'))
            .controller('ThingListController', require('app/modules/thing/controllers/ThingListController'));
});