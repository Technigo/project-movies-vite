import { CTAButton } from "../components/CTAButton/CTAButton";

export const ErrorPage = () => {
  const btnTarget = "errorPage";
  return <section>
    <h1>404</h1>
    <p>Page not found</p>
    <CTAButton btnTarget={btnTarget}/>
  </section>
};
