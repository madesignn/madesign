import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "@/data/index";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const PricingPage = () => {
  return (
    <div className="mt-20">
      <h1 className="heading text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide " id="pricing">
        <span className="text-purple">Price</span> List
      </h1>
      <div className="flex flex-wrap">
       
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            
            <div className="p-10 border border-purple rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-purple to-purple text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#about" >
                <MagicButton  
                 title="Subscribe"
                 icon={<FaLocationArrow />}
                 position='right'
                />
              </a>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default PricingPage;