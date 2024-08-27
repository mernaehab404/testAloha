import { RestfulEndpoint } from "@mongez/http";

class RegionsService extends RestfulEndpoint {
  /**
   * {@inheritdoc}
   */
  public route = "/regions";

  /**
   * Get parent regions only
   */
  public parents() {
    return this.list({
      parentOnly: true,
      paginate: false,
    });
  }
}

const regionsService = new RegionsService();

export default regionsService;
