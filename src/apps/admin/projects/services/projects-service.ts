import { RestfulEndpoint } from "@mongez/http";

class ProjectsService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/projects";
}

export const projectsService = new ProjectsService();
