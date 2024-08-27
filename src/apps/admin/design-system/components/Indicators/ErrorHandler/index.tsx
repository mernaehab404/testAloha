import parseError from "apps/admin/utils/parse-error";
import React from "react";
import Error from "../../Error";
import { ErrorHandlerProps } from "./types";

export default function ErrorHandler({ error }: ErrorHandlerProps) {
  const errorContent = React.useMemo(() => parseError(error), [error]);

  if (!errorContent) return null;

  return (
    <>
      <Error>{errorContent}</Error>
    </>
  );
}
