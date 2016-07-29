define(function(require) {
   require('angular')
   .module('app.address.services', [])
   .service('AddressService', require('app/modules/address/services/AddressService'));
});