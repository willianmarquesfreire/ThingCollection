define(function (require) {
    var angular = require('angular');
    require('app/modules/contact/services/module');
    require('angular-ui-router');

    return angular
            .module('app.contact.controllers', ['app.contact.services','ui.router'])
            .controller('ContactFormController', require('app/modules/contact/controllers/ContactFormController'))
            .controller('ContactListController', require('app/modules/contact/controllers/ContactListController'));
});