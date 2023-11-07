import { Flex } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  const getErrorMessage = (error: unknown) => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === "string") {
      return error;
    } else {
      
      return "Unknown error";
    }
  };

  return <Flex>{getErrorMessage(error)}</Flex>;
};
