define(['app/apiLocations'], function(APILocation) {

	PeopleService.$inject = ['GumgaRest'];

	function PeopleService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/people');

    	return Service;
    }

  	return PeopleService;
});