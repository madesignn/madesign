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
      <div className="flex flex-wrap text-center">
       
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 ">
            
            <div className="p-2 border border-purple rounded-xl backdrop-blur-lg bg-purple/5">
              <p className="text-4xl mb-6 text-purple">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-purple to-purple text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8 text-center">
                <span className="text-5xl mt-3 mr-2">{option.price}</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="ml-3 mt-5 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-3">{feature}</span>
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