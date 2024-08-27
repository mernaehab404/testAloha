import styled from "@emotion/styled";
import { SubmitButton } from "@mongez/moonlight";
import { Link } from "@mongez/react-router";

export const LoginWrapper = styled("div")({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  justifyContent: "space-between",
});

export const Wrapper = styled("div")(() => {
  return {
    label: "LoginWrapper",
    width: "500px",
    margin: "0 auto",
    marginTop: "7%",
    padding: " 12px 15.5px 10.5px 13px",
    borderRadius: "12.5px",
    boxShadow: "0px 1.5px 2.5px 0 #00000019",
  };
});

export const H3 = styled("h3")({
  textAlign: "center",
});

export const FormContainer = styled("div")({
  paddingLeft: "16px",
  paddingRight: "16px",
});

export const LinkWrapper = styled("div")({
  textAlign: "center",
  padding: "0.5rem 0",
});

export const ForgotLink = styled(Link)({
  height: "48px",
  color: "#b1c1c2",
  fontSize: "1rem",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    color: "#b1c1c2",
  },
});

export const AuthSubmitButton = styled(SubmitButton)({
  width: "100%",
  color: "#fff",
  height: "48px",
  fontSize: "1rem",
  margin: "1rem 0",
  padding: "8px 22px",
  textAlign: "center",
  fontWeight: "bold",
});
