define(function (require) {
    var angular = require('angular');
    require('app/modules/reservation/services/module');
    require('angular-ui-router');

    return angular
            .module('app.reservation.controllers', ['app.reservation.services','ui.router'])
            .controller('ReservationFormController', require('app/modules/reservation/controllers/ReservationFormController'))
            .controller('ReservationListController', require('app/modules/reservation/controllers/ReservationListController'));
});