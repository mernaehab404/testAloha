import { RestfulEndpoint } from "@mongez/http";

class ContactUsUsService extends RestfulEndpoint {
  /**
   * {@inheritDoc}
   */
  public route = "/contact-us";

  /**
   * Reply to the given contact message id
   */
  reply(id: number, data: any) {
    return this.endpoint.post(this.path(`/${id}/reply`), data);
  }
}

const contactUsUsService = new ContactUsUsService();

export default contactUsUsService;
