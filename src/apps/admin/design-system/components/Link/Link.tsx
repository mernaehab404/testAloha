import { Anchor, AnchorProps } from "@mantine/core";
import { Link, LinkProps } from "@mongez/react-router";
import style from "./Link.Style.module.css";

export function BaseLink(props: AnchorProps & LinkProps) {
  return <Anchor className={style.link} {...props} component={Link} />;
}

export default BaseLink;
