define(function(require) {
   require('angular')
   .module('app.movement.services', [])
   .service('MovementService', require('app/modules/movement/services/MovementService'));
});