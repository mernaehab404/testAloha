import { RestfulEndpoint } from "@mongez/http";

class CountriesService extends RestfulEndpoint {
  /**
   * {@inheritdoc}
   */
  public route = "/countries";
}

const countriesService = new CountriesService();

export default countriesService;
