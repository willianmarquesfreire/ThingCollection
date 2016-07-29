define(['app/apiLocations'], function(APILocation) {

	TransportService.$inject = ['GumgaRest'];

	function TransportService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/transport');

    	return Service;
    }

  	return TransportService;
});