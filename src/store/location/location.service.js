import { ENUMS, ENDPOINTS } from "../../utils/constants";
import { HttpClient } from "../../utils/lib";

class LocationService {
  static getCurrentLocation = (queryParams) =>
    HttpClient.setMethod(ENUMS.HTTP_METHODS.GET)
     // .setDomain(ENDPOINTS.GOOGLE_MAPS_DOMAIN)
      .setUrl(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Kandy,%20Sri%20Lanka&key=AIzaSyB1l49cKVDRZPBhwLoiAUiNGlxQGcBGmUs`)
      //.setUrl(`${ENDPOINTS.GOOGLE_MAPS_API}?${queryParams}`)
      .request();
}

export default LocationService;
