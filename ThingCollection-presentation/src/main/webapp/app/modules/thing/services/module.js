define(function(require) {
   require('angular')
   .module('app.thing.services', [])
   .service('ThingService', require('app/modules/thing/services/ThingService'));
});