define(['app/apiLocations'], function(APILocation) {

	BookService.$inject = ['GumgaRest'];

	function BookService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/book');

    	return Service;
    }

  	return BookService;
});