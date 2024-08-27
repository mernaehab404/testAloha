import { RestfulEndpoint } from "@mongez/http";

class CurrenciesService extends RestfulEndpoint {
  /**
   * {@inheritdoc}
   */
  public route = "/currencies";
}

const currenciesService = new CurrenciesService();

export default currenciesService;
