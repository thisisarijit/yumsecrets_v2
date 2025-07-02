import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Header />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
