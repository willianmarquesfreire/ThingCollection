define(function (require) {
    var angular = require('angular');
    require('app/modules/publishinghouse/services/module');
    require('angular-ui-router');

    return angular
            .module('app.publishinghouse.controllers', ['app.publishinghouse.services','ui.router'])
            .controller('PublishingHouseFormController', require('app/modules/publishinghouse/controllers/PublishingHouseFormController'))
            .controller('PublishingHouseListController', require('app/modules/publishinghouse/controllers/PublishingHouseListController'));
});