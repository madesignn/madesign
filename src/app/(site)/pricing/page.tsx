import Breadcrumb from "@/src/components/Common/Breadcrumb";
import Faq from "@/src/components/Faq";
import Pricing from "@/src/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing Page | MADESIGN",
  description: "This is pricing page description",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing Page" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
