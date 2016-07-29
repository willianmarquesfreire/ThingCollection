define(['app/apiLocations'], function(APILocation) {

	AcessoryService.$inject = ['GumgaRest'];

	function AcessoryService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/acessory');

    	return Service;
    }

  	return AcessoryService;
});