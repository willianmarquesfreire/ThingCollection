define(['app/apiLocations'], function(APILocation) {

	ReservationService.$inject = ['GumgaRest'];

	function ReservationService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/reservation');

    	return Service;
    }

  	return ReservationService;
});