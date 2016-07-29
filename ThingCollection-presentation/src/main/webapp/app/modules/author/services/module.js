define(function(require) {
   require('angular')
   .module('app.author.services', [])
   .service('AuthorService', require('app/modules/author/services/AuthorService'));
});