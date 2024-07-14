import { CheckCircle2 } from "lucide-react"

const OfferListlogoad = ({ text }: { text: string }) => {
    return (
      <ul> 
        <li className={`text-base text-body-color dark:text-dark-6 mt-6 flex`}> 
          <span> <CheckCircle2 /></span> <span className="ml-2">{text}</span>
          
          </li>
    </ul>
     );
  };
  
  export default OfferListlogoad;
  