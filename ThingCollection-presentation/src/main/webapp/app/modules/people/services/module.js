define(function(require) {
   require('angular')
   .module('app.people.services', [])
   .service('PeopleService', require('app/modules/people/services/PeopleService'));
});