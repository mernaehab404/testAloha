import { RestfulEndpoint } from "@mongez/http";

class ErrorsService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/errors";
}

export const errorsService = new ErrorsService();
