import { RestfulEndpoint } from "@mongez/http";

class SettingsService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/settings";

  /**
   * Update settings
   */
  public updateSettings(data: any) {
    return this.endpoint.post(this.path(""), data);
  }
}

const settingsService = new SettingsService();

export default settingsService;
