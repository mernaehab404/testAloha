import { Avatar, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { appVersion } from "shared/flags";
import { FooterWrapper } from "./Footer.Style";

// Get Dynamic Year...
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <FooterWrapper>
      <Text w={500} fz="sm" c="gray">
        {trans("copyRight")} ©{year}
      </Text>
      <Text c="gray" fz="sm" w={500}>
        v{appVersion}
      </Text>
      <Link to="https://mentoor.io" newTab>
        <Avatar radius="xl" src={"https://mentoor.io/logo.svg"} />
      </Link>
    </FooterWrapper>
  );
}
