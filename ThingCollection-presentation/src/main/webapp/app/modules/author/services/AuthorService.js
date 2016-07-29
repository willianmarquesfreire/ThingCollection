define(['app/apiLocations'], function(APILocation) {

	AuthorService.$inject = ['GumgaRest'];

	function AuthorService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/author');

    	return Service;
    }

  	return AuthorService;
});