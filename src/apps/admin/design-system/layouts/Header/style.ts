import styled from "@emotion/styled";
import { Box } from "@mantine/core";
import React from "react";
import { PrimaryButton } from "../../components/Button";

export const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow:
    "0px 2px 4px -1px rgb(0 0 0 / 10%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 3%)",
};

export const CheckButton: React.FC<any> = styled(PrimaryButton)({
  width: "40px",
  height: "40px",
  background: "none",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s all ease",
  "&:hover": {
    transition: "0.3s all ease",
    background: "#00ab5514",
  },
});

export const NotificationWrapper = styled(Box)({
  margin: "0.5rem 0",
  padding: "0.3rem",
  "&:hover": {
    backgroundColor: "#919eab14",
  },
});
