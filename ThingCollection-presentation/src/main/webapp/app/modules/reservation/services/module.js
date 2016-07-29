define(function(require) {
   require('angular')
   .module('app.reservation.services', [])
   .service('ReservationService', require('app/modules/reservation/services/ReservationService'));
});