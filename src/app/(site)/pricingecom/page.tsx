import Breadcrumb from "@/src/components/ui/Breadcrumb";
import Faq from "@/src/components/Faq";
import PricingEcom from "@/src/components/PricingEcom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "E-commerce Pricing | MADESIGN",
  description: "This is pricing page description",
};

const Pricingecom = () => {
  return (
    <>
      <Breadcrumb pageName="E-commerce Pricing Page" />
      <PricingEcom />
      <Faq />
    </>
  );
};

export default Pricingecom;
