define(function(require) {
   require('angular')
   .module('app.location.services', [])
   .service('LocationService', require('app/modules/location/services/LocationService'));
});