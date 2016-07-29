define(function(require) {
   require('angular')
   .module('app.transport.services', [])
   .service('TransportService', require('app/modules/transport/services/TransportService'));
});