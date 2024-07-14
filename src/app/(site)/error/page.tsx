import Breadcrumb from "@/src/components/ui/Breadcrumb";
import NotFound from "@/src/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | MADEISGN",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
