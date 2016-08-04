define(['app/apiLocations'], function(APILocation) {

	SubjectService.$inject = ['GumgaRest'];

	function SubjectService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/subject');

    	return Service;
    }

  	return SubjectService;
});