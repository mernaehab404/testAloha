import { RestfulEndpoint } from "@mongez/http";

class CompoundsService extends RestfulEndpoint {
  /**
   * {@inheritdoc}
   */
  public route = "/compounds";
}

const compoundsService = new CompoundsService();

export default compoundsService;
