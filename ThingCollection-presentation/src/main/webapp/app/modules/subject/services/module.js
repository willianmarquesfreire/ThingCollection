define(function(require) {
   require('angular')
   .module('app.subject.services', [])
   .service('SubjectService', require('app/modules/subject/services/SubjectService'));
});