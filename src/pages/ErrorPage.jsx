import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/not-found", { replace: true });
  }, []);

  return (
    <>
      <PageTitle title="Page not found – MovieHut" />
      <h1 className="text-3xl font-bold">
        Sorry, we couldn't find a matching page.
      </h1>
    </>
  );
};

export default ErrorPage;
