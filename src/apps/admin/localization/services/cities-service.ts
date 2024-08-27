import { RestfulEndpoint } from "@mongez/http";

class CitiesService extends RestfulEndpoint {
  /**
   * {@inheritdoc}
   */
  public route = "/cities";
}

const citiesService = new CitiesService();

export default citiesService;
