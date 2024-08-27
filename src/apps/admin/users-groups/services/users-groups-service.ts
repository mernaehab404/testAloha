import { RestfulEndpoint } from "@mongez/http";

class UsersGroupsService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/users-groups";
}

export const usersGroupsService = new UsersGroupsService();
