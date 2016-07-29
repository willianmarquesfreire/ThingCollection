define(['app/apiLocations'], function(APILocation) {

	MovementService.$inject = ['GumgaRest'];

	function MovementService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/movement');

    	return Service;
    }

  	return MovementService;
});