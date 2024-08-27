import { RestfulEndpoint } from "@mongez/http";

class PlatformsService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/platforms";
}

export const platformsService = new PlatformsService();
