define(['app/apiLocations'], function(APILocation) {

	LocationService.$inject = ['GumgaRest'];

	function LocationService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/location');

    	return Service;
    }

  	return LocationService;
});