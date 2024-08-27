import { RestfulEndpoint } from "@mongez/http";

class StreetsService extends RestfulEndpoint {
  /**
   * {@inheritdoc}
   */
  public route = "/streets";
}

const streetsService = new StreetsService();

export default streetsService;
