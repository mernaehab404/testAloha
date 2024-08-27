import { RestfulEndpoint } from "@mongez/http";

class ReasonsService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/reasons";
}

export const reasonsService = new ReasonsService();
