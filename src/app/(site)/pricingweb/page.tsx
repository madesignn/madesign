import Breadcrumb from "@/src/components/ui/Breadcrumb";
import Faq from "@/src/components/Faq";
import PricingWeb from "@/src/components/PricingWeb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Website Design Pricing | MADESIGN",
  description: "This is pricing page description",
};

const Pricingweb = () => {
  return (
    <>
      <Breadcrumb pageName="Website Design Pricing Page" />
      <PricingWeb />
      <Faq />
    </>
  );
};

export default Pricingweb;
