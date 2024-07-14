"use client";
import SectionTitle from "../ui/SectionTitle";
import PricingBoxweb from "./PricingBoxWeb";
import { pricingDataWeb } from "@/data/index";

const PricingWeb = () => {
  return (
    <section
      id="pricingweb"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Table"
            title="Our Pricing Plan"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingDataWeb.map((product, i) => (
          <PricingBoxweb key={i} product={product} />
          ))}     
        </div>
      </div>
    </section>
  );
};

export default PricingWeb;
