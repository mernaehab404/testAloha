import { RestfulEndpoint } from "@mongez/http";

class DistrictsService extends RestfulEndpoint {
  /**
   * {@inheritdoc}
   */
  public route = "/districts";
}

const districtsService = new DistrictsService();

export default districtsService;
