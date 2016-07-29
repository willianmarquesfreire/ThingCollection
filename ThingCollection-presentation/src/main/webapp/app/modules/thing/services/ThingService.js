define(['app/apiLocations'], function(APILocation) {

	ThingService.$inject = ['GumgaRest'];

	function ThingService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/thing');

    	return Service;
    }

  	return ThingService;
});