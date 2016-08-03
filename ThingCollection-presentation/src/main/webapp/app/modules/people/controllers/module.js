define(function (require) {
    var angular = require('angular');
    require('app/modules/people/services/module');
    require('angular-ui-router');

    return angular
            .module('app.people.controllers', ['app.people.services','ui.router'])
            .controller('ModalContactController', require('app/modules/people/controllers/ModalContactController'))
            .controller('ModalAddressController', require('app/modules/people/controllers/ModalAddressController'))
            .controller('PeopleFormController', require('app/modules/people/controllers/PeopleFormController'))
            .controller('PeopleListController', require('app/modules/people/controllers/PeopleListController'));
});