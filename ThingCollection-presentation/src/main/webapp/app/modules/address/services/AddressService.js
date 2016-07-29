define(['app/apiLocations'], function(APILocation) {

	AddressService.$inject = ['GumgaRest'];

	function AddressService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/address');

    	return Service;
    }

  	return AddressService;
});