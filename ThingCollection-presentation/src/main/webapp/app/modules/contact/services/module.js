define(function(require) {
   require('angular')
   .module('app.contact.services', [])
   .service('ContactService', require('app/modules/contact/services/ContactService'));
});