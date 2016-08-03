define(function (require) {
    var angular = require('angular');
    require('app/modules/movement/services/module');
    require('angular-ui-router');

    return angular
            .module('app.movement.controllers', ['app.movement.services','ui.router'])
            .controller('ModalThingController', require('app/modules/movement/controllers/ModalThingController'))
            .controller('MovementFormController', require('app/modules/movement/controllers/MovementFormController'))
            .controller('MovementListController', require('app/modules/movement/controllers/MovementListController'));
});