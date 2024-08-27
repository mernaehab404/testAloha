import { Box, Image } from "@mantine/core";
import { trans } from "@mongez/localization";
import { PasswordInput, TextInput } from "@mongez/moonlight";
import { Form, HiddenInput } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import URLS from "apps/admin/utils/urls";
import { forgetPasswordAtom } from "../../atom/forget-password-atom";
import { resetFormSubmit } from "../../helpers/accountFormSubmit";
import { AuthSubmitButton, Wrapper } from "../LoginPage/style";

export default function ResetPasswordPage() {
  const { email } = forgetPasswordAtom.value;

  if (!email) {
    navigateTo(URLS.login);
    return null;
  }

  return (
    <Wrapper>
      <Box mb="xl">
        <Image src={"https://mentoor.io/logo.svg"} width="100px" m="auto" />
      </Box>
      <Form onSubmit={resetFormSubmit}>
        <HiddenInput value={email} name="email" />
        <TextInput
          // disable autocomplete
          autoComplete="off"
          my={10}
          name="code"
          autoFocus
          required
          label={trans("otp")}
          placeholder={trans("otp")}
        />
        <PasswordInput
          name="password"
          id="password"
          my={10}
          required
          minLength={8}
          label={trans("newPassword")}
          placeholder={trans("newPassword")}
        />
        <PasswordInput
          name="confirmPassword"
          label={trans("confirmPassword")}
          placeholder={trans("confirmPassword")}
          required
          radius={2}
          minLength={8}
          match="password"
        />
        <AuthSubmitButton
          variant="gradient"
          gradient={{ from: "green", to: "cyan" }}>
          {trans("resetPassword")}
        </AuthSubmitButton>
      </Form>
    </Wrapper>
  );
}
