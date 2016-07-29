define(function(require) {
   require('angular')
   .module('app.publishinghouse.services', [])
   .service('PublishingHouseService', require('app/modules/publishinghouse/services/PublishingHouseService'));
});