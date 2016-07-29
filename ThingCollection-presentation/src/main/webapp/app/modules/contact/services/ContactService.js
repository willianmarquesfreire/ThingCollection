define(['app/apiLocations'], function(APILocation) {

	ContactService.$inject = ['GumgaRest'];

	function ContactService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/contact');

    	return Service;
    }

  	return ContactService;
});