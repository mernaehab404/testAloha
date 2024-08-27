import { RestfulEndpoint } from "@mongez/http";

class UsersService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/users";
}

export const usersService = new UsersService();
