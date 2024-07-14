import Breadcrumb from "@/src/components/ui/Breadcrumb";
import Faq from "@/src/components/Faq";
import PricingLogoAd from "@/src/components/PricingLogoAd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Logo & Ad Design Pricing | MADESIGN",
  description: "This is pricing page description",
};

const PricingLogoad = () => {
  return (
    <>
      <Breadcrumb pageName="Logo & Ad Pricing Page" />
      <PricingLogoAd />
      <Faq />
    </>
  );
};

export default PricingLogoad;
