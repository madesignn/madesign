"use client";
import SectionTitle from "../ui/SectionTitle";
import PricingBoxEcom from "./PricingBoxEcom";
import { pricingDataEcom } from "@/data/index";

const PricingEcom = () => {
  return (
    <section
      id="pricingecom"
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
          {pricingDataEcom.map((product, i) => (
          <PricingBoxEcom key={i} product={product} />
          ))}     
        </div>
      </div>
    </section>
  );
};

export default PricingEcom;
