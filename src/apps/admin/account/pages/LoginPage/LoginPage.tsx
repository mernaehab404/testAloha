import { Box, Image, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import { PasswordInput, TextInput } from "@mongez/moonlight";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { performLogin } from "app/account/helpers/accountFormSubmit";
import URLS from "apps/admin/utils/urls";
import BaseLayout from "design-system/layouts/BaseLayout";
import { AuthSubmitButton, ForgotLink, LinkWrapper, Wrapper } from "../style";

export default function LoginForm() {
  return (
    <BaseLayout>
      <Wrapper>
        <Helmet title={trans("login")} />
        <Form onSubmit={performLogin}>
          <Text ta="center" mb="xl">
            <Image
              src={"https://mentoor.io/logo.svg"}
              w={100}
              m="auto"
              alt="Top Hills"
            />
          </Text>
          <Box pb={10}>
            <TextInput
              autoFocus
              placeholder={trans("enterEmail")}
              name="email"
              required
            />
          </Box>
          <Box>
            <PasswordInput
              placeholder={trans("enterPass")}
              name="password"
              required
            />
          </Box>
          <AuthSubmitButton
            variant="gradient"
            gradient={{ from: "green", to: "cyan" }}>
            {trans("login")}
          </AuthSubmitButton>
          <LinkWrapper>
            <ForgotLink to={URLS.forgotPassword}>
              {trans("forgotPassword")}
            </ForgotLink>
          </LinkWrapper>
        </Form>
      </Wrapper>
    </BaseLayout>
  );
}
