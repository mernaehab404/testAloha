import { RestfulEndpoint } from "@mongez/http";

class OrganizationsService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/organizations";
}

export const organizationsService = new OrganizationsService();
