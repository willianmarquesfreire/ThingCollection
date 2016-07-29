define(function(require) {
   require('angular')
   .module('app.book.services', [])
   .service('BookService', require('app/modules/book/services/BookService'));
});