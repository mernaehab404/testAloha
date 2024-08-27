import { trans } from "@mongez/localization";
import { TextInput } from "@mongez/moonlight";
import { Form } from "@mongez/react-form";
import URLS from "../../../utils/urls";
import { forgotPasswordSubmit } from "../../helpers/accountFormSubmit";
import { AuthSubmitButton, ForgotLink, LinkWrapper, Wrapper } from "../style";

export default function ForgotPasswordPage() {
  return (
    <Wrapper>
      <Form onSubmit={forgotPasswordSubmit}>
        <div>
          <TextInput
            autoFocus
            placeholder={trans("enterEmail")}
            name="email"
            required
          />
        </div>
        <AuthSubmitButton
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}>
          {trans("resetPassword")}
        </AuthSubmitButton>
        <LinkWrapper>
          <ForgotLink to={URLS.login}>{trans("backToLogin")}</ForgotLink>
        </LinkWrapper>
      </Form>
    </Wrapper>
  );
}
