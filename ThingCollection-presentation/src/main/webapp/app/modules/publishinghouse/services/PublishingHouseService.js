define(['app/apiLocations'], function(APILocation) {

	PublishingHouseService.$inject = ['GumgaRest'];

	function PublishingHouseService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/publishinghouse');

    	return Service;
    }

  	return PublishingHouseService;
});