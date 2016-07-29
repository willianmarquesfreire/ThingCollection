define(function (require) {
    var angular = require('angular');
    require('app/modules/address/services/module');
    require('angular-ui-router');

    return angular
            .module('app.address.controllers', ['app.address.services','ui.router'])
            .controller('AddressFormController', require('app/modules/address/controllers/AddressFormController'))
            .controller('AddressListController', require('app/modules/address/controllers/AddressListController'));
});